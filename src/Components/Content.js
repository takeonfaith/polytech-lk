import React, {useEffect, useState} from 'react'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'
import { ChatPage } from './../Components/Pages/Messages_Components/ChatPage'
import Chats from '../Data/Messages/Chats.json'
import '../Styles/Content.css'
import { Schedule_Session } from './Pages/Schedule_Session'
import MessagePlate from './Pages/Messages_Components/MessagePlate'
import { CreateApplicationPage } from './Pages/Applications_Components/CreateApplicationPage'

function Content(props) {
	const history = useHistory()
	const [currentWallpaper, setCurrentWallpaper] = useState(7)
	const [contentPadding, setContentPadding] = useState(window.location.pathname.includes('/messages/')?0:!props.isMobile?50:"20px 10px")
	const [contentTransition, setContentTransition] = useState(window.location.pathname.includes('/messages/')?".2s transform, padding 0s":".2s transform, padding")
    useEffect(() => {
		return history.listen((location) => {
			setContentPadding(location.pathname.includes('/messages/')?0:!props.isMobile?50:"20px 10px")
			setContentTransition(location.pathname.includes('/messages/')?".2s transform, padding 0s":".2s transform, padding")
			for (let i = 0; i < props.defaultNav.length; i++) {
				if(location.pathname.includes(props.defaultNav[i].path)){
					props.currentPageCallBackFunc(i)
				}
			}
		})
	},[history, window.innerWidth])
	function wallpaperCallBackFunc(id) {
		setCurrentWallpaper(id)
	}
	const [scroll, setScroll] = useState(0)
	return (
		<div className = "Content" onScroll = {(e)=>setScroll(e.target.scrollTop)} style = {props.isMobile && props.mobileMenuOpened?{transform:"scale(.96)", borderRadius:"var(--standartBorderRadius2)", opacity:"0.5", padding:contentPadding, transition:contentTransition}:{padding:contentPadding, transition:contentTransition}}>
			<Switch>	
				<Route path = {"/applications/create-application"} render = {()=><CreateApplicationPage/>}/>
				<Route path = "/schedule/session" render = {()=><Schedule_Session/>}/>
				{Chats.map(({id, name, photo, chatLink, chatData, seen}, i)=>{
					return(
						<Route
							id = {id}
							key = {id}
							path = {chatLink}
							render = {()=>
								<div className = "chatAndChatList">
									<ChatPage id = {id} darkTheme = {props.darkTheme} currentWallpaper = {currentWallpaper} wallpaperCallBackFunc = {wallpaperCallBackFunc} name = {name} photo = {photo} chatData = {chatData} isMobile = {props.isMobile} mobileWidth = {props.mobileWidth} Chats = {Chats}/>
									<div className = "RightSideChatList" style = {{height:(window.innerHeight - 77)}}>
										<div>
											{Chats.map(({id, name, photo, chatLink, chatData, seen}, i)=>{
												return(
												<MessagePlate
													key = {id}
													id = {id}
													index = {i}
													photo = {photo} 
													name = {name} 
													txtLen = {15}
													seen = {seen}
													currentOpened = {window.location.pathname.includes(chatLink)}
													chatData = {chatData} 
													chatLink = {chatLink}
												/>)
											})}
										</div>
									</div>
								</div>
							}
						/>
					)
				})}
				{props.defaultNav.map(({id, path, content: C})=>{
					if(id !== 7){
						return(
							<Route 
								key = {id}
								path = {path} 
								render = {()=>
									<C 
										isMobile = {props.isMobile}
										mobileWidth = {props.mobileWidth}
										shortCardBg = {props.shortCardBg}
										shortCardConfig = {props.shortCardConfig}
										defaultNav = {props.defaultNav}
										darkTheme = {props.darkTheme}
										notificationsList = {props.notificationsList}
              						setNotificationsList = {props.setNotificationsList}
										searchFunc = {props.searchFunc}
										swipedDown = {props.swipedDown}
										scroll = {scroll}
									/>
								}
							/>
						)
					} else return null;
				})}
				<Route render = {()=><Redirect to = "/profile"/>}/>
			</Switch>
		</div>
	)
}

export default Content