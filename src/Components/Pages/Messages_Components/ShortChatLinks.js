import React from 'react'
import { Link } from 'react-router-dom'

export const ShortChatLinks = ({path, photo}) => {
	return (
		<div className = "ShortChatLinks">
			<Link to = {path}>
				<img src={photo} alt=""/>
			</Link>
		</div>
	)
}
