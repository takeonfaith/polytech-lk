import React, {useState} from 'react'
import '../../Styles/Groupmates.css'
import GroupmatesData from '../../Data/Groupmates.json'
import { PeopleList } from '../General_Components/PeopleList'
function Groupmates({searchGroupCallBackFunc, groupmatesData, Chats}) {
	const [groupmatesList, setGroupmatesList] = useState(GroupmatesData)
	const groupFilter = [
		{
			id:0,
			option:"Все",
			icon:"",
			rightIcon:""
		},
		{
			id:1,
			option:"Моя группа",
			icon:"",
			rightIcon:""
		},
		{
			id:2,
			option:"191-721",
			icon:"",
			rightIcon:""
		},
		{
			id:3,
			option:"191-723",
			icon:"",
			rightIcon:""
		},
		{
			id:4,
			option:"191-724",
			icon:"",
			rightIcon:""
		},
		{
			id:5,
			option:"191-725",
			icon:"",
			rightIcon:""
		},
		{
			id:6,
			option:"191-726",
			icon:"",
			rightIcon:""
		}
	]
	return (
		<div className = "Groupmates">
			<PeopleList 
				searchCallBackFunc = {searchGroupCallBackFunc} 
				Chats = {Chats} 
				data = {GroupmatesData} 
				list = {groupmatesList} 
				setList = {setGroupmatesList}
				searchText = "Поиск студентов" 
				filterOptions = {groupFilter}
			/>
		</div>
	)
}

export default Groupmates
