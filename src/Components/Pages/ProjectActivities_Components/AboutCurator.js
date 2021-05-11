import React from 'react'
import { Link } from 'react-router-dom'
import createDialog from '../../../Functions/createDialog'
import createRandomLink from '../../../Functions/createRandomLink'
import WideBtn from '../../General_Components/wideBtn'
import Chats from '../../../Data/Messages/Chats.json'
export const AboutCurator = ({data, curatorName = 'name', curatorTitle = "Куратор", descr = 'descr'}) => {
	var linkIndex = Chats.findIndex((p) => p.name === data.name)
	var linkToChat = linkIndex === -1 ? "/messages/" + createRandomLink(10) : Chats[linkIndex].chatLink
	return (
		<div className = "AboutCurator">
			<div className="AboutCuratorLeftSide">
				<div className="curatorPhotoAndName">
					<div className="curatorImgBorder">
						<img src={data.pic} alt=""/>
					</div>
					<div className="curatorName">
						{data[curatorName]}
					</div>
					<h3>{curatorTitle}</h3>
				</div>
				
			</div>
			<div className="AboutCuratorRightSide">
				<div className="curatorDescription">
					<h3>Описание</h3>
					{data[descr]}
				</div>
				<Link to={linkToChat} onClick={()=>createDialog(data.name, data.pic, linkToChat, linkIndex)}>
					<WideBtn btnText = "Написать" bg = "linear-gradient(45deg, #8D6BB8, #DD708A)"/>
				</Link>
			</div>
		</div>
	)
}
