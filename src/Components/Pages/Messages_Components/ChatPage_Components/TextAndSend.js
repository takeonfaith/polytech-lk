import React from 'react'
import keyPressHandler from '../../../../Functions/keyPressHandler'
import attachImage from '../../../../Functions/attachImage'
export const TextAndSend = ({messageFieldRef, StudentsData, userMessage, setUserMessage, sendImg, imgAttached, setImgAttached, setShowWriteAnimation, chatData, setMList}) => {
	return (
		<div className = "textAndSend" >
			<form>
				<input id="f02" type="file" placeholder="Add profile picture" onChange = {(e)=>attachImage(e, setImgAttached)}/>
				<label htmlFor="f02"><i className="fas fa-paperclip"></i></label>
			</form>
			<input type="text" onKeyDown = {(e)=>keyPressHandler(e, imgAttached, setShowWriteAnimation, StudentsData, userMessage, chatData, setImgAttached, setUserMessage, setMList)} ref = {messageFieldRef} value = {userMessage} onChange = {(e)=>setUserMessage(e.target.value)} className = "chatInputField" name="" placeholder = "Сообщение" id=""/>
			<button onClick = {(e)=>keyPressHandler(e, imgAttached, setShowWriteAnimation, StudentsData, userMessage, chatData, setImgAttached, setUserMessage, setMList)} className = "sendBtn" style = {StudentsData.id?{background:'var(--orangeGradient)'}:{}}><img src = {sendImg} alt = "Отправить" style = {userMessage.length === 0?{opacity:.5}:{}}/></button>
		</div>
	)
}
