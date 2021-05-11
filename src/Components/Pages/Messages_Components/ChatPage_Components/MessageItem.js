import React from 'react'
import correctTimeDisplay from '../../../../Functions/correctTimeDisplay'

export const MessageItem = ({text, photo, nextSender, sendTime, sender, yourPhoto, id, len, img}) => {
	var userPic = !sender?yourPhoto:photo
	var messageForm = nextSender?"rounded":"cloud"
	var messageTime = new Date(sendTime)
	var messageItemClass = !sender?"yourMessage":"otherPersonMessage"
	var pic = userPic.length == 0?<i  className = "far fa-user fa-fw"></i>:<img src={userPic} alt=""/>
	return (
		<div  className = {"MessageItem " + messageItemClass + " " + messageForm} style = {id > len-8?{animation:"fadeInBottom .4s forwards"}:{opacity:1}}>
			<div className = "MessageItem_PhotoAndName">
				<div className="MessageItem_Photo_Border" style = {nextSender?{visibility:'hidden', opacity:0, transform:"translateY(100%)"}:{ opacity:1}}>
					{pic}
				</div>
				<div className = "MessageItem_NameAndMessage" style = {{display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
					<div style = {{display:'flex', alignItems:'flex-end', justifyContent:'space-between'}}>
						<p className = "messageText">
							{text.includes("http") && text.includes("//") || text.includes("www")?<a style = {{textDecoration:'underline', color:'#d9fffb'}} href = {text}>{text}</a>:text}
						</p>
						
						<span style = {{marginLeft:"5px", fontSize:".87em",opacity:.7}}>{correctTimeDisplay(messageTime.getHours(), messageTime.getMinutes())}</span>
					</div> 
					
					{img === "" || img === undefined?null:
					<div className = "attachedImg" style = {{marginBottom:7}}>
						<img className = "attachedImg" src={img} alt=""/>
					</div>
					}
				</div>
			</div>
			
		</div>
	)
}
