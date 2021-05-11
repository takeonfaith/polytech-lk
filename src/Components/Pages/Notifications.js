import React, { useState, useEffect } from 'react'
import NotificationsData from '../../Data/Notifications.json'
import { NotificationItem } from './Notifications_Components/NotificationItem'
import Chats from '../../Data/Messages/Chats.json'
import '../../Styles/Notifications.css'
import SearchBar from '../General_Components/SearchBar'
import { CustomSelect } from '../General_Components/CustomSelect'
import { filterOptions } from '../../Configs/notificationFilterConfig'
import correctNumberBasedWord from '../../Functions/correctNumberBasedWord'
export default function Notifications({notificationsList, setNotificationsList}) {
	function changeMessageNotif(){
		if(!Chats.some((el)=>el.seen === false)) NotificationsData.splice(NotificationsData.findIndex((el)=>el.type == 'messages'), 1)
		else{
			if(NotificationsData.length !== 0){
				let counter = 0
				Chats.map((el) => { if (!el.seen) counter++ })
				NotificationsData.find((el)=>el.type == 'messages').title = "У вас " + counter + correctNumberBasedWord(counter, " новое ", " новых ", " новых ") + correctNumberBasedWord(counter, " сообщение ", " сообщения ", " сообщений ")
				setNotificationsList(NotificationsData)
			}
			return 
		}
	}

	useEffect(() => {
		changeMessageNotif()
		return () => {
			changeMessageNotif()
		}
	}, [])

	const [currentNumberOption, setCurrentNumberOption] = useState(0)

	const [currentFilter, setCurrentFilter] = useState(filterOptions[currentNumberOption].option)
	useEffect(() => {
		let engNames = ["all", "application", "messages", "session", "payments"]
		if (currentFilter !== "Все") {
			setNotificationsList(NotificationsData.filter((el) => {
				return el.type === engNames[filterOptions.findIndex((f) => f.option === currentFilter)]
			}))
		}
		else setNotificationsList(NotificationsData)
	}, [currentFilter])

	return (
		<div className="Notifications">

			<div className="searchAndSortAndClose" style={{ display: 'flex' }}>
				<SearchBar searchList={NotificationsData} seacrhWord={'title'} setFunc={setNotificationsList} text="Поиск по уведомлениям" />
				<div className="sortAndClose" style={{ display: 'flex', width: '100%' }}>
					<CustomSelect
						selectOptions={filterOptions}
						iconMode={0}
						currentOption={currentFilter}
						changeOption={setCurrentFilter}
						currentNumberOption={currentNumberOption}
						changeCurrentNumberOption={setCurrentNumberOption}
					/>
					<button className="clearNotifBtn" onClick={() => {NotificationsData.splice(0, NotificationsData.length); setNotificationsList([]); }}><i className="fas fa-times fa-fw"></i> Очистить</button>
				</div>
			</div>
			{notificationsList.map(({ id, type, title, innerText, icon, date }) => {
				return <NotificationItem key={id} id={id} type={type} title={title} innerText={innerText} icon={icon} date={date} setNotificationsList={setNotificationsList} />
			})}
			{notificationsList.length === 0 ? <h3 style={{ marginTop: '20px' }}>Тут пусто</h3> : <></>}
		</div>
	)
}
