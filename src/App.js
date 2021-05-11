
import React, { useEffect, useState } from 'react'
import './App.css';
import Content from './Components/Content';
import Header from './Components/Header';
import LeftSideBar from './Components/LeftSideBar';
import SettingsWindow from './Components/SettingsWindow';
import NotificationsData from './Data/Notifications.json'
import Chats from './Data/Messages/Chats.json'
import Applications from './Data/ApplicationsData.json'
import { BrowserRouter } from 'react-router-dom'
import { BottomHint } from './Components/General_Components/BottomHint';
import {defaultNav} from './Configs/defaultNav'
import wordDateDisplay from './Functions/wordDateDisplay';
import correctNumberBasedWord from './Functions/correctNumberBasedWord';

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false)
  const [bottomHint, setBottomHint] = useState({
    show:false,
    text:"",
    bg:"var(--search_Color)"
  })
  const [openSettingsWindow, setOpenSettingsWindow] = useState(false)
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false)
  const [mobileWidth, setMobileWidth] = useState(window.innerWidth)
  const [notifications, setNotifications] = useState(false)
	const [currentLang, setCurrentLang] = useState('Русский')
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000)
  window.addEventListener('resize', () => {
    setMobileWidth(window.innerWidth)
    setIsMobile(window.innerWidth < 1000)
  })
  
  const [currentPage, setCurrentPage] = useState(
    () => {
      for (let i = 0; i < defaultNav.length; i++) {
        if (window.location.pathname.includes(defaultNav[i].path)) {
          return i
        }
      }
      return 0
    }
  )

  const [leftSideNav, setLeftSideNav] = useState(defaultNav)
  const [openedOtherPages, setOpenedOtherPages] = useState(false)
  const [sideBarFilterArray, setSideBarFilterArray] = useState([])
  const [sideBarConfig, setSideBarConfig] = useState([0, 1, 2, 3, 4, 5, 6, 7])
  const [shortCardConfig, setShortCardConfig] = useState([2, 1, 9, 11])
  const [shortCardBg, setShortCardBg] = useState(["#8EA2EB", "#69cd91", "#E05464", "#567dff"])
  useEffect(() => { setLeftSideNav(defaultNav.filter((el) => sideBarConfig.includes(el.id))) }, [])

  function searchCallBackFunc(array) {
    if (array.length < defaultNav.length) { setLeftSideNav(defaultNav.filter((el) => array.includes(el.id))) }
    else { setLeftSideNav(defaultNav.filter((el) => openedOtherPages ? el.id <= defaultNav.length : sideBarConfig.includes(el.id))) }
    setSideBarFilterArray(array)
  }

  function SettingsWindowCallBackFunc(bool) { setOpenSettingsWindow(bool) }

  function darkThemeCallBackFunc(bool) { setDarkTheme(bool) }

  function currentPageCallBackFunc(num) { setCurrentPage(num) }

  function MobileMenuCallBackFunc(bool) { setMobileMenuOpened(bool) }

  function sideBarConfigCallBackFunc(array) {
    setSideBarConfig(array)
    setLeftSideNav(defaultNav.filter((el) => array.includes(el.id)))
  }

  function shortCardCallBackFunc(array) {
    setShortCardConfig(array)
  }

  function shortCardBgCallBackFunc(array) {
    setShortCardBg(array)
  }

  //Open "Other" pages
  function openOtherPagesCallBackFunc(bool) {
    setOpenedOtherPages(bool)
    if (bool) setLeftSideNav(
      sideBarFilterArray.length === 0 ?
        defaultNav.filter((el) => el.id <= defaultNav.length) :
        defaultNav.filter((el) => sideBarFilterArray.includes(el.id) || el.id >= 7)
    )
    else {
      setLeftSideNav(
        sideBarFilterArray.length === defaultNav.length ?
          defaultNav.filter((el) => sideBarConfig.includes(el.id)) :
          defaultNav.filter((el) => sideBarFilterArray.includes(el.id))
      )
    }
  }

  function NotifCallBackFunc(bool) {
    setNotifications(bool)
  }

  function CurrentLangCallBackFunc(lang) {
    setCurrentLang(lang)
  }

  //Bottom Hint
  function BottomHintCallBackFunc(text, bool, bg = "var(--search_Color)") {
    setBottomHint({show:bool, text:text, bg:bg});
  }

  //swipes
  document.addEventListener('touchstart', handleTouchStart, false);        
  document.addEventListener('touchmove', handleTouchMove, false);

  var xDown = null;                                                        
  var yDown = null;
  const [swipedLeft, setSwipedLeft] = useState(false)
  const [swipedRight, setSwipedRight] = useState(false)
  const [swipedUp, setSwipedUp] = useState(false)
  const [swipedDown, setSwipedDown] = useState(false)
  function getTouches(evt) {
    return evt.touches ||             // browser API
          evt.originalEvent.touches; // jQuery
  }                                                     

  function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];                                      
      xDown = firstTouch.clientX;                                      
      yDown = firstTouch.clientY;                                      
  };                                                

  function handleTouchMove(evt) {
      if ( ! xDown || ! yDown ) {
          return;
      }

      var xUp = evt.touches[0].clientX;                                    
      var yUp = evt.touches[0].clientY;

      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;

      if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
          if ( xDiff > 0 ) {
            setSwipedLeft(true)
            setTimeout(()=>{setSwipedLeft(false)}, 500)
          } else {
            setSwipedRight(true)
            setTimeout(()=>{setSwipedRight(false)}, 500)
          }                       
      } else {
          if ( yDiff > 0 ) {
            setSwipedUp(true)
            setTimeout(()=>{setSwipedUp(false)}, 100)
          } else { 
            setSwipedDown(true)
            setTimeout(()=>{setSwipedDown(false)}, 100)
          }                                                                 
      }
      /* reset values */
      xDown = null;
      yDown = null;                                             
  };

  useEffect(() => {
    if (darkTheme) { document.documentElement.setAttribute('data-theme', 'dark') }
    else { document.documentElement.setAttribute('data-theme', 'light') }
  }, [darkTheme])
  
  useEffect(() => {
    document.title = defaultNav[currentPage].title
  }, [currentPage])
  
  
  const [notificationsList, setNotificationsList] = useState(
		() => {
			if (!Chats.every((el) => el.seen === true) && NotificationsData.findIndex(el => { return el.type === 'messages' }) === -1) {
				let counter = 0
				Chats.map((el) => { if (!el.seen) counter++ })
				NotificationsData.push({
					id: NotificationsData.length,
					type: "messages",
					title: "У вас " + counter + correctNumberBasedWord(counter, " новое ", " новых ", " новых ") + correctNumberBasedWord(counter, " сообщение ", " сообщения ", " сообщений "),
					innerText: "-",
					icon: "far fa-comment fa-fw",
					date: new Date()
				})
				Applications.map((app) => {
          NotificationsData.push({
            id: NotificationsData.length,
            type: "application",
            title: app.status === "inWork" ? "Заявление находится в работе: " + app.request : app.status === "rejected" ? "Заявление отклонено: " + app.request : "Заявление принято: " + app.request,
            innerText: (app.status === "inWork" ? "В работе с " : app.status === "rejected" ? "Отклонено " : "Принято ") + wordDateDisplay(new Date(app.statusDate), 2) + ". " + app.notation,
            icon: "far fa-file-alt fa-fw",
            date: app.date
          })
				})
				NotificationsData.sort((a, b) => {
					let f = new Date(a.date).getTime()
					let s = new Date(b.date).getTime()
					if (f < s) return 1
					else if (f > s) return -1
					else return 0
				})
				return NotificationsData
			}
			return NotificationsData
		}
	)

	useEffect(() => {
		setNotificationsList(NotificationsData)
	}, [NotificationsData])
  return (
    <BrowserRouter>
      <div className="App">
        <SettingsWindow
          openSettingsWindow={openSettingsWindow}
          darkTheme={darkTheme}
          defaultNav={defaultNav}
          sideBarConfig={sideBarConfig}
          shortCardBg={shortCardBg}
          shortCardConfig={shortCardConfig}
          showBottomHint = {bottomHint}
          notifications = {notifications}
          currentLang = {currentLang}
          NotifCallBackFunc = {NotifCallBackFunc}
          CurrentLangCallBackFunc = {CurrentLangCallBackFunc}
          BottomHintCallBackFunc = {BottomHintCallBackFunc}
          shortCardCallBackFunc={shortCardCallBackFunc}
          shortCardBgCallBackFunc={shortCardBgCallBackFunc}
          darkThemeCallBackFunc={darkThemeCallBackFunc}
          SettingsWindowCallBackFunc={SettingsWindowCallBackFunc}
          sideBarConfigCallBackFunc={sideBarConfigCallBackFunc}
        />
        <div className="wrapper" style={openSettingsWindow ? { filter: "brightness(.5)" } : {}} onClick={()=>{if(openSettingsWindow)setOpenSettingsWindow(false)}}>
          <LeftSideBar
            currentPage={currentPage}
            leftSideNav={leftSideNav}
            defaultNav={defaultNav}
            darkTheme={darkTheme}
            openedOtherPages={openedOtherPages}
            swipedLeft = {swipedLeft}
            swipedRight = {swipedRight}
            mobileMenuOpened={mobileMenuOpened}
            MobileMenuCallBackFunc={MobileMenuCallBackFunc}
            searchCallBackFunc={searchCallBackFunc}
            openOtherPagesCallBackFunc={openOtherPagesCallBackFunc}
            mobileWidth={mobileWidth}
            isMobile={isMobile}
          />
          <div className="rightSide">
            <Header
              title={defaultNav[currentPage].title}
              openSettingsWindow={openSettingsWindow}
              SettingsWindowCallBackFunc={SettingsWindowCallBackFunc}
              mobileMenuOpened={mobileMenuOpened}
              MobileMenuCallBackFunc={MobileMenuCallBackFunc}
            />
            <Content
              swipedRight = {swipedRight}
              swipedLeft = {swipedLeft}
              swipedDown = {swipedDown}
              defaultNav={defaultNav}
              mobileMenuOpened={mobileMenuOpened}
              isMobile={isMobile}
              mobileWidth={mobileWidth}
              darkTheme={darkTheme}
              shortCardBg={shortCardBg}
              shortCardConfig={shortCardConfig}
              notificationsList = {notificationsList}
              setNotificationsList = {setNotificationsList}
              setCurrentPage={setCurrentPage}
              MobileMenuCallBackFunc = {MobileMenuCallBackFunc}
              currentPageCallBackFunc={currentPageCallBackFunc}
            />
          </div>
        </div>
        <BottomHint bottomHint = {bottomHint}/>
      </div>
    </BrowserRouter>
  );
}
