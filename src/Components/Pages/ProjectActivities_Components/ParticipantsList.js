import React, {useState, useEffect} from 'react'
import SearchBar from '../../General_Components/SearchBar'
import { ParticipantItem } from './Participants_Components/ParticipantItem'

export const ParticipantsList = ({data}) => {
	const [participantsRenderList, setParticipantsRenderList] = useState(data)
	useEffect(() => {
		setParticipantsRenderList(data)
	}, [data])
	return (
		<div className = "ParticipantsList">
			<div className="Participants_TopSide">
				<h3>Список участников</h3>
			</div>
			<SearchBar searchList = {data} seacrhWord = "name" text = "Поиск участников" setFunc = {setParticipantsRenderList}/>
			<div className="ParticipantsList_List">
				{participantsRenderList.map((person, i)=>{
					return <ParticipantItem pic = {person.pic} name = {person.name} link = {person.link} key = {i}/>
				})}
			</div>
		</div>
	)
}
