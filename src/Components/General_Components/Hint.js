import React from 'react'

export const Hint = ({text, openHint, setOpenHint, hintXPos, hintYPos, isMobile}) => {
	text = text == "inWork"?"В работе": text == "rejected"?"Отклонено":text == "done"?"Заявка одобрена":text
	var hintStyle = !isMobile?
		openHint?
		{
			animation: "fadeInBottom .2s forwards",
			zIndex:20, transform:"scale(1)", 
			left:hintXPos-350, 
			top:hintYPos
		}:
		{
			left:hintXPos-350, 
			top:hintYPos
		}:
		openHint?
		{
			transition:'.2s',
			opacity:1, 
			zIndex:20,
		}:
		{

		}
	return (
		<div className = "Hint" style = {hintStyle}>
			<i className="fas fa-times" onClick={()=>setOpenHint(false)}></i>
			{text}
		</div>
	)
}
