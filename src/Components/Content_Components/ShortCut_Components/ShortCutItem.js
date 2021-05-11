import React from 'react'
import { Link } from 'react-router-dom'
function ShortCutItem(props) {
	return (
		<Link to = {props.path} className = {"card" + props.n} style = {{background:props.shortCardBg}}>
			<div className = "ShortCutItem" id = {props.id} >
				<i id = {props.id} className={props.icon} />
				<h4>{props.title}</h4> 
			</div>
		</Link>
	)
}

export default ShortCutItem
