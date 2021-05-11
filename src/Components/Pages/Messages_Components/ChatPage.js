import React, { useRef, useEffect, useState } from 'react'
import { MessageItem } from './ChatPage_Components/MessageItem'
import StudentsData from '../../../Data/StudentsData.json'
import sendImg from '../../../Imgs/sendArrow.png'
import wordDateDisplay from '../../../Functions/wordDateDisplay'
import Chats from '../../../Data/Messages/Chats.json'
import { ChatMenu } from './ChatPage_Components/ChatMenu'
import { useHistory } from 'react-router-dom'
import { TextAndSend } from './ChatPage_Components/TextAndSend'
import { ChatHeader } from './ChatPage_Components/ChatHeader'
export const ChatPage = ({ chatData, id, name, photo, isMobile, wallpaperCallBackFunc, currentWallpaper }) => {
	const messagesEndRef = useRef(null)
	const messageFieldRef = useRef(null)
	const chatMenuTriggerRef = useRef(null)
	const wallparersList =
		[
			"https://cdn.dribbble.com/users/13449/screenshots/1793547/attachments/296574/Lakeside_Morning_1920x1080.jpg",
			"https://trashbox.ru/nowebp/1065729_c8dc07/screenshot_00.png",
			"https://images4.alphacoders.com/964/964483.jpg",
			"https://wallpaperboat.com/wp-content/uploads/2020/06/04/43205/sky-minimalist-03.jpg",
			"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b3be1dae-3caa-4d45-be6c-3de586ba95e2/de4ql0w-2b944d56-55b1-42a2-8d64-20e5d91d0cc5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYjNiZTFkYWUtM2NhYS00ZDQ1LWJlNmMtM2RlNTg2YmE5NWUyXC9kZTRxbDB3LTJiOTQ0ZDU2LTU1YjEtNDJhMi04ZDY0LTIwZTVkOTFkMGNjNS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.CSkuiCshn_idktcwXiUpvvdxJBheCCVm96e_XPp7JUE",
			"https://www.lefthudson.com/wp-content/uploads/2019/11/minimalist-mountain-wallpaper-hd-fresh-snow-mountain-night-landscape-minimalist-minimalism-4k-inspiration-of-minimalist-mountain-wallpaper-hd.jpg",
			"https://1.bp.blogspot.com/-DZlVzjP-deI/X4N3srezjEI/AAAAAAAAbwE/amz0mU-iC1Mhrz_SNrQBajBrjkxyLUVRACLcBGAsYHQ/s16000/DESERT-NIGHT-DESKTOP-HD.png",
		]
	const [imgAttached, setImgAttached] = useState("")
	const [mList, setMList] = useState(chatData)
	const [scrollValue, setScrollValue] = useState(0)
	const [bottomBtnScroll, setBottomBtnScroll] = useState(0)
	const [userMessage, setUserMessage] = useState("")
	const [searchTextHeader, setSearchTextHeader] = useState("")
	const [showWriteAnimation, setShowWriteAnimation] = useState(false)
	const [openChatMenu, setOpenChatMenu] = useState(false)
	function openChatMenuFunc() { setOpenChatMenu(!openChatMenu) }
	const scrollToBottom = () => { messagesEndRef.current.scrollIntoView() }

	const history = useHistory()
	useEffect(() => { scrollToBottom(); if (!isMobile) messageFieldRef.current.focus() }, [chatData.length, userMessage.length]);
	useEffect(() => { Chats.find((el) => el.id === id).seen = true }, [])
	var arr = []
	var pic = photo.length === 0 ? <i className="far fa-user fa-fw"></i> : <img className="chatHeader_Photo" src={photo} alt="" />
	return (
		<div className="ChatPage" style={currentWallpaper == "-1" ? { background: "var(--closeToContent_Color)", animation: "zoom .3s forwards" } : { background: "url(" + wallparersList[currentWallpaper] + ") 50% / cover", animation: "zoom .3s forwards" }}>
			<ChatHeader history={history} openChatMenu={openChatMenu} openChatMenuFunc={openChatMenuFunc} StudentsData={StudentsData} name={name} pic={pic} chatMenuTriggerRef={chatMenuTriggerRef} />
			<div
				className="messagesWindow"
				style={isMobile ? imgAttached === "" ? { height: window.innerHeight - 140 } : { height: window.innerHeight - 260 } : imgAttached === "" ? { height: window.innerHeight - 190 } : { height: window.innerHeight - 275 }}
				onScroll={(event) => { setScrollValue(event.target.scrollTop); setBottomBtnScroll(event.target.scrollHeight - event.target.scrollTop) }}
			>
				<ChatMenu wallpaperCallBackFunc={wallpaperCallBackFunc} currentWallpaper={currentWallpaper} wallparersList={wallparersList} openChatMenu={openChatMenu} setOpenChatMenu={setOpenChatMenu} chatData={chatData} setMList={setMList} searchTextHeader={(text) => { searchTextHeader(text) }} chatMenuTriggerRef={chatMenuTriggerRef} />
				{
					mList.map((m, i, a) => {
						var tipoTime = new Date(m.time.split(' ', 3).join(' '))
						let shouldRender = false
						if (!arr.includes(tipoTime.getTime())) {
							arr.push(tipoTime.getTime())
							shouldRender = true
						}
						return (
							<div className="messageItemWrapper" key={i}>
								<div className="dateOfSomeMessages" style={!shouldRender ? { display: 'none' } : {}}><h5>{wordDateDisplay(new Date(m.time), 1)}</h5>	</div>
								<MessageItem
									text={m.message}
									sender={m.sender}
									sendTime={m.time}
									photo={photo}
									nextSender={mList[mList[i + 1] == undefined ? i : (i + 1)].sender == m.sender && (i + 1) != mList.length && !shouldRender}
									name={name}
									img={m.image}
									yourName={StudentsData.name}
									yourPhoto={StudentsData.photo}
									id={i}
									bottomBtnScroll={bottomBtnScroll}
									len={a.length}
									scrollValue={scrollValue}
								/>
							</div>
						)
					})
				}

				{
					chatData.length == 0 ?
						<h2 style={{ textAlign: 'center', margin: "100px 0" }}>Чат пуст</h2> :
						mList.length == 0 ?
							<h2 style={{ textAlign: 'center', margin: "100px 0" }}>Ничего не было найдено</h2> : <></>
				}
				<div className="writingAnimation" style={!showWriteAnimation ? { display: 'none' } : {}}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div className="scrollToBottomButton" onClick={scrollToBottom} style={bottomBtnScroll < 1050 ? { visibility: 'hidden', opacity: 0, transform: 'scale(1) translateY(10px)' } : {}}>
					<i className="fas fa-chevron-down"></i>
				</div>
				<div ref={messagesEndRef} />
			</div>
			{imgAttached === "" ? null : <img style={{ width: "auto", maxWidth: "100px", maxHeight: 70, margin: "5px 0", borderRadius: "var(--standartBorderRadius1)" }} src={imgAttached} alt="" />}
			<TextAndSend
				messageFieldRef={messageFieldRef}
				StudentsData={StudentsData}
				userMessage={userMessage}
				setUserMessage={setUserMessage}
				sendImg={sendImg}
				imgAttached={imgAttached}
				setImgAttached={setImgAttached}
				setMList={setMList}
				setShowWriteAnimation={setShowWriteAnimation}
				chatData={chatData}
			/>

		</div>
	)
}
