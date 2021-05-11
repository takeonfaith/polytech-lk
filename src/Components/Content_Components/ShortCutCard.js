import React from 'react'
import ShortCutItem from './ShortCut_Components/ShortCutItem'

function ShortCutCard(props) {
	const cardsArray = props.defaultNav.filter((el)=>{
		return props.shortCardConfig.includes(el.id)
	})
	return (
		<div className = "ShortCutCard">
			{cardsArray.map((i, n)=> {return <ShortCutItem shortCardBg = {props.shortCardBg[n]} icon = {i.icon} n = {n} path = {i.path} title = {i.title} key = {i.id} id = {i.id}/>})} 
		</div>
	)
}

export default ShortCutCard
