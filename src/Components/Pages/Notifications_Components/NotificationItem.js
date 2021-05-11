import React, {useState, useEffect} from 'react'
import wordDateDisplay from '../../../Functions/wordDateDisplay'
import Chats from '../../../Data/Messages/Chats.json'
import { Link } from 'react-router-dom'
import NotificationsData from '../../../Data/Notifications.json'
import shortWordDisplay from '../../../Functions/shortWordDisplay'
export const NotificationItem = ({id, type, title, innerText, icon, date, setNotificationsList}) => {
	const [openNotif, setOpenNotif] = useState(false)

	const defineType = (type) => {
		if(type === "messages"){
			return Chats.map((el, i)=>{
				if(el.seen === false){	
					return (
						<Link to = {el.chatLink} key = {i}>
							<div className = "missedMessages">
								<img src={el.photo} alt=""/>
								<div>
									<h4>{el.name}</h4>
									<p>{shortWordDisplay(el.chatData[el.chatData.length-1].message, 110)}</p>
								</div>
							</div>
						</Link>
					)
				}
			})
		}
		else return <div>{innerText}</div>
	}

	function deleteExactNotif(e) {
		e.stopPropagation();
		let t = NotificationsData.filter((el)=>{return el.id !== id})
		NotificationsData.splice(NotificationsData.findIndex((el)=>{return el.id === id}), 1);
		setNotificationsList(t)
	}
	return (
		<div className = "NotificationItem" id = {id} onClick = {()=>setOpenNotif(!openNotif)}>
			<div className = "notificationTitleAndDate">
				<div style = {{display:'flex', alignItems:'center'}}>
					<div className = "NotifIcon">
						<i className = {icon}></i>
					</div>
					<h3>{title}</h3>
				</div>
				<div className = "notifDateAndClose" style = {{display:'flex', alignItems:'center'}}>
					<p>{wordDateDisplay(new Date(date), 0)}</p>
					<i className = "fas fa-times" onClick = {deleteExactNotif}></i>
				</div>
			</div>
			{openNotif?<div className = "hiddenNotifText">{defineType(type)}</div>:<></>}
		</div>
	)
}
