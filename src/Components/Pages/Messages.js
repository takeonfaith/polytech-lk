import React, {useState} from 'react'
import '../../Styles/Messages.css'
import SearchBar from '../General_Components/SearchBar'
import MessagePlate  from './Messages_Components/MessagePlate'
import Chats from '../../Data/Messages/Chats.json'
export default function Messages() {	
	const [messagesList, setMessagesList] = useState(Chats)
	function compare(a, b) {
		a = new Date(a)
		b = new Date(b)
		if(a.getTime() > b.getTime()) return - 1
		if(a.getTime() < b.getTime()) return 1
		if(a.getTime()==b.getTime()) return 0
	}
	
	Chats.sort((a,b)=>
		a.chatData.length > 0?compare(a.chatData[a.chatData.length - 1].time, b.chatData[b.chatData.length - 1].time):false
	)
	return (
		<div className="Messages" style = {{animation:'fadeInBottom .3s forwards'}}>
			<SearchBar searchList = {Chats} seacrhWord = {'name'} setFunc = {setMessagesList} text = "Поиск людей"/>
			<ul>
				{
					messagesList.map(({id, name, photo, chatData, seen, chatLink}, i)=>{
						return(
							<li key = {id}>
								<MessagePlate 
									key = {id}
									id = {id}
									index = {i}
									photo = {photo} 
									name = {name} 
									seen = {seen}
									chatData = {chatData} 
									chatLink = {chatLink}
								/>
							</li>
						)
					})
				}
			</ul>
			{Chats.length == 0?<h2>У вас еще нет диалогов</h2>:<></>}
		</div>
	)
}

