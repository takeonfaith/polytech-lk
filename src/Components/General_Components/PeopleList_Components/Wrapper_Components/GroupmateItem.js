import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Chats from '../../../../Data/Messages/Chats.json'
import createDialog from '../../../../Functions/createDialog'
import createRandomLink from '../../../../Functions/createRandomLink'
export const GroupmateItem = ({ name, id, captain, photo, StudentsData, peopleDisplay }) => {
	var matePic = photo === "" ? <i className="far fa-user fa-fw"></i> : <img src={photo} alt="" />
	const linkIndex = Chats.findIndex((p) => p.name === name)
	const linkToChat = linkIndex === -1 ? "/messages/" + createRandomLink(10) : Chats[linkIndex].chatLink
	return (
		<div className={"GroupmateItem " + peopleDisplay}>
			<div className="studentNum">{id}</div>
			<Link to={StudentsData.name !== name ? linkToChat : "/#"} onClick={()=>createDialog(name, photo, linkToChat, linkIndex)}>
				<div className="imgPlace">
					<div className="isCaptain">{captain ? <i className="fas fa-crown"></i> : null}</div>
					{matePic}
					<div className="chatWithFriend" style={photo !== "" ? { color: "#fff" } : {}}>
						{
							StudentsData.name !== name ?
								<div style={{ display: "flex", flexDirection: 'column' }}>
									<i className="far fa-comment"></i>
									<span style={peopleDisplay === "list" ? { display: 'none' } : {}}>Написать</span>
								</div> :
								<div>
									Это вы
							</div>
						}
					</div>
				</div>
			</Link>
			<h5>{name}</h5>
		</div>
	)
}
