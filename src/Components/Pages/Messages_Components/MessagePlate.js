import React from 'react'
import { Link } from 'react-router-dom'
import correctTimeDisplay from '../../../Functions/correctTimeDisplay'
import wordDateDisplay from '../../../Functions/wordDateDisplay'
import Chats from '../../../Data/Messages/Chats.json'
import shortWordDisplay from '../../../Functions/shortWordDisplay'
 const MessagePlate = ({name, id, photo, seen, chatData, chatLink, index, currentOpened = false, txtLen}) => {
	 var time = new Date()
	 var lastMessage = ""
	 var lastPic = ""
	 var whoWasLast = 1
	 chatData.map((el)=>{
		 if(el.id+1 == chatData.length){
			lastMessage = el.message
			lastPic = el.image
			time = new Date(el.time)
			whoWasLast = el.sender
		 }
		
	 })

	var timeDisplay
	if((new Date()).getTime() - time.getTime() > 86400000){
		timeDisplay = wordDateDisplay(time)
	}
	else if((new Date()).getTime() - time.getTime() > 60400000) timeDisplay = "Вчера"
	else{
		timeDisplay = correctTimeDisplay(time.getHours(), time.getMinutes())
	}
	var pic = photo.length == 0?<i className = "far fa-user fa-fw"></i>:<img src={photo} alt=""/>
	var lenOfText = txtLen === undefined?window.innerWidth < 500?30:40:txtLen
	return (
		<Link to = {chatLink}  onClick = {()=>{Chats[index].seen = true}}>
			<div className = "MessagePlate" style = {currentOpened?{background:'var(--mildPurpleColor)'}:{}}>
				<div className = "platePic">
					<div className="MessagePlate_Pic_Border" >
						{pic}
					</div>
					{!Chats[index].seen?<span className = "notificationCircle"></span>:<div></div>}
				</div>
				
				<div className = "nameAndMessage">
					<h3>{name}</h3>
					<span className = "lastMessage">{!whoWasLast?"Вы: ":""}{lastMessage.length !== 0?shortWordDisplay(lastMessage, lenOfText):lastPic.length === 0 ?null:"Фото"}</span>
				</div>
				<span className = "messagePlateTime">
					{timeDisplay}
				</span>
			</div>
		</Link>
	)
}

export default MessagePlate
