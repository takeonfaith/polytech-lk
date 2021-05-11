export default function keyPressHandler(event, imgAttached, setShowWriteAnimation, StudentsData, userMessage, chatData, setImgAttached, setUserMessage, setMList) {
	if(StudentsData.id != 0){
		if(userMessage.length == 0) setShowWriteAnimation(false)
		else setShowWriteAnimation(true)
	}
	if(((event.key === 'Enter' || event.button === 0) && userMessage.length != 0) || ((event.key === 'Enter' || event.button === 0) && imgAttached !== "")){
		chatData.push({
			id:chatData.length,
			sender:StudentsData.id,
			message:userMessage,
			image:imgAttached,
			time:new Date().toString()
		})
		setImgAttached("")
		setShowWriteAnimation(false)
		setUserMessage('')
		setMList(chatData)
	}
	
}