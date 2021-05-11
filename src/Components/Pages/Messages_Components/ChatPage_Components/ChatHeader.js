import React from 'react'

export const ChatHeader = ({history, openChatMenu, openChatMenuFunc, StudentsData, name, pic, chatMenuTriggerRef}) => {
	return (
		<div className = "chatHeader">
			<button onClick = {()=>history.goBack()}><i className="fas fa-arrow-left"></i></button>
			<div className = "chatHeaderName" style = {openChatMenu?{transform:"scale(.94)", background:'var(--settings_Color)'}:{}} onClick = {openChatMenuFunc} ref = {chatMenuTriggerRef}>
				<h4 >{name}</h4>
				<i className = "fas fa-angle-down" style = {{marginLeft:"5px"}}></i>
			</div>
			<div className = "chatHeader_Photo_Border" onClick = {()=>{StudentsData.id = !StudentsData.id}} style = {StudentsData.id?{background:"rgb(226 121 146)"}:{	background:" #99a2f4"}}>
				{pic}
			</div>
		</div>
	)
}
