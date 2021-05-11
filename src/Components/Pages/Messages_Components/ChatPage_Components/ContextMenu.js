import React from 'react'

export const ContextMenu = ({x, y, showContextMenu}) => {
	return (
		<div className = "ContextMenu" style = {showContextMenu?{position:'absolute', top:y-80, left:x}:{position:'absolute',top:y-80, left:x, width:0, height:0, visibility:'hidden', opacity:0, }}>
			<h2>{x}{y}</h2>
		</div>
	)
}
