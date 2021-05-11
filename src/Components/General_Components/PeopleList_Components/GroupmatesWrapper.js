import React from 'react'
import { GroupmateItem } from './Wrapper_Components/GroupmateItem'
import StudentsData from '../../../Data/StudentsData.json'
export const GroupmatesWrapper = ({groupList, StudentsData, peopleDisplay, Chats, showAll, currentFilter}) => {
	let count = 0
	return (
		<div className = {"GroupmatesWrapper " + peopleDisplay}>
			{
				groupList.length != 0?
				groupList.map((person, i)=>{
					
					if(currentFilter === 'Все') return(<GroupmateItem Chats = {Chats} peopleDisplay = {peopleDisplay} key = {person.id} id = {i + 1} captain = {person.captain} name = {person.name} photo = {person.photo} StudentsData = {StudentsData}/>)
					else if(currentFilter === person.cathedra || currentFilter === 'Моя группа' && person.yourTeacher || currentFilter === 'Моя группа' && person.group === StudentsData.group || currentFilter === person.group) {
						count++
						return(<GroupmateItem Chats = {Chats} peopleDisplay = {peopleDisplay} key = {person.id} id = {count} captain = {person.captain} name = {person.name} photo = {person.photo} StudentsData = {StudentsData}/>)
					}
				}):
				<h3 style = {{margin:"10px 0"}}>Ничего не было найдено</h3>
			}
		</div>
	)
}
