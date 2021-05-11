import React from 'react'

function Switch({currentPosition, callBackFunc}) {
	function switchAction() {
		callBackFunc(!currentPosition)
	}
	const SwitchStyle = 
	currentPosition?
	{
		marginLeft: "50%",
		background:"#789bff"
	}:
	{}
	return (
		<div className = "Switch" onClick = {switchAction}>
			<div className="innerCircle" style = {SwitchStyle}></div>
		</div>
	)
}

export default Switch
