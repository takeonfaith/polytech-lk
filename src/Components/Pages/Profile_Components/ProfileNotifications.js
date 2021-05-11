import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import NotificationsData from '../../../Data/Notifications.json'
import findCurrentNotif from '../../../Functions/findCurrentPage'
import shortWordDisplay from '../../../Functions/shortWordDisplay'
import { PageDots } from '../../General_Components/PageDots'
import { NotificationItem } from '../Notifications_Components/NotificationItem'
export const ProfileNotifications = () => {
	const [areDotsVisible, setAreDotsVisible] = useState(false)
	const [currentNotif, setCurrentNotif] = useState(0)
	return (
		<Link style = {window.innerWidth > 1000?{display:'flex', width:"100%"}:{display:'none'}} to = "/notifications">
			<div className = "ProfileNotifications" onScroll = {(e)=>findCurrentNotif(e, setCurrentNotif, setAreDotsVisible)}>
				{NotificationsData.map((notif, i)=>{
					return(
						<NotificationItem key = {i} type = {notif.type} title = {shortWordDisplay(notif.title, 34)} innerText = {notif.innerText} icon = {notif.icon} date = {notif.date}/>
					) 
				})}
				{NotificationsData.length === 0?<h2 style = {{position:'absolute', top:50 + "%", left:'50%', transform:'translate(-50%, -50%)'}}>Нет новых уведомлений</h2>:null }
			</div>
			<PageDots dotsAmount = {NotificationsData} currentDot = {currentNotif} minusDots = {1} isVertical = {true} isFilled = {false} isVisible = {areDotsVisible}/>
		</Link>
	)
}
