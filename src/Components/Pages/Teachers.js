import React, {useState} from 'react'
import { PeopleList } from '../General_Components/PeopleList'
import TeachersData from '../../Data/TeachersData.json'
function Teachers({searchTeacherCallBackFunc, Chats}) {
	const [teachersList, setTeachersList] = useState(TeachersData)
	const cathedraFilter = [
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
			option:"Информатика и информационные технологии",
			icon:"",
			rightIcon:""
		},
		{
			id:3,
			option:"Инфокогнитивные технологии",
			icon:"",
			rightIcon:""
		},
		{
			id:4,
			option:"Физическое воспитание",
			icon:"",
			rightIcon:""
		},
		{
			id:5,
			option:"Управление персоналом",
			icon:"",
			rightIcon:""
		},
		{
			id:6,
			option:"Издательское дело и книговедение",
			icon:"",
			rightIcon:""
		},
		{
			id:7,
			option:"Иностранные языки",
			icon:"",
			rightIcon:""
		},
		{
			id:8,
			option:"Технологии и управление качеством в полиграфическом и упаковочном производстве",
			icon:"",
			rightIcon:""
		},
		{
			id:9,
			option:"Рисунок и живопись",
			icon:"",
			rightIcon:""
		},
		{
			id:10,
			option:"Материаловедение",
			icon:"",
			rightIcon:""
		},
		{
			id:11,
			option:"Художественно-техническое оформление печатной продукции",
			icon:"",
			rightIcon:""
		},
		{
			id:12,
			option:"Иллюстрация и эстамп",
			icon:"",
			rightIcon:""
		},
		{
			id:13,
			option:"Прикладная информатика",
			icon:"",
			rightIcon:""
		},
		{
			id:14,
			option:"Полиграфические системы",
			icon:"",
			rightIcon:""
		},
		{
			id:15,
			option:"Гуманитарные дисциплины",
			icon:"",
			rightIcon:""
		},
		{
			id:16,
			option:"Математика",
			icon:"",
			rightIcon:""
		}
	]
	return (
		<div className = "Teachers">
			<PeopleList 
				searchCallBackFunc = {searchTeacherCallBackFunc} 
				Chats = {Chats} 
				data = {TeachersData} 
				list = {teachersList} 
				setList = {setTeachersList}
				searchText = "Поиск преподавателей"
				filterOptions = {cathedraFilter}
			/>
		</div>
	)
}

export default Teachers
