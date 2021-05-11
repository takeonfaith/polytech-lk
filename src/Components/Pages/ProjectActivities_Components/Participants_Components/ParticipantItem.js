import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import createRandomLink from '../../../../Functions/createRandomLink'
import shortWordDisplay from '../../../../Functions/shortWordDisplay'
import Chats from '../../../../Data/Messages/Chats.json'
import createDialog from '../../../../Functions/createDialog'
export const ParticipantItem = ({pic, name}) => {
	const linkIndex = Chats.findIndex((p) => p.name === name)
	const linkToChat = linkIndex === -1 ? "/messages/" + createRandomLink(10) : Chats[linkIndex].chatLink
	return (
		<Link to={linkToChat} onClick={()=>createDialog(name, pic, linkToChat, linkIndex)}>	
			<div className = "ParticipantItem">
				<img src={pic} alt=""/>
				<span>{shortWordDisplay(name, 30)}</span>
			</div>
		</Link>
	)
}
