import React from 'react'

export const ScoreItem = ({score, forWhat}) => {
	return (
		<div className = "ScoreItem"> 
			<span>{forWhat}</span>
			<span style = {{color:'var(--greenColor)', fontWeight:'bold'}}>+{score}</span>
		</div>
	)
}
