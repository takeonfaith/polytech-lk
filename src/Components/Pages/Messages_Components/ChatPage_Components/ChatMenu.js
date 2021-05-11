import React,{useState, useRef, useEffect} from 'react'
import SearchBar from '../../../General_Components/SearchBar'

export const ChatMenu = ({openChatMenu, setOpenChatMenu, chatData, setMList, wallparersList, currentWallpaper, wallpaperCallBackFunc, chatMenuTriggerRef}) => {
	function changeWallpaper(event) {
		wallpaperCallBackFunc(event.target.id)
	}
	const [openAttachments, setOpenAttachments] = useState(false)
	const menuRef = useRef()
	useEffect(() => {
		// add when mounted
		document.addEventListener("mousedown", handleClick);
		// return function to be called when unmounted
		return () => {
		  document.removeEventListener("mousedown", handleClick);
		};
	 }, []);
	const handleClick = e =>{
		if (menuRef.current.contains(e.target)) return;
		if(chatMenuTriggerRef.current.contains(e.target)) return;
		setOpenChatMenu(false)
	}
	return (
		<div className = "ChatMenu" ref = {menuRef} style = {!openChatMenu?{visibility:'hidden'}:{opacity:1, transform: "translateX(-50%) translateY(5px)"}}>
			<div style = {openAttachments?{display:"none"}:{}}>
				<SearchBar searchList = {chatData} seacrhWord = {'message'} setFunc = {setMList}  text = "Поиск по сообщениям"/>
				<div className="wallpapers"> 
					<div className="chatMenuWallpaper" id = "-1" onClick = {changeWallpaper} style = {currentWallpaper == -1?{border:"3px solid var(--blueColor)",background:'var(--closeToContent_Color)'}:{background:'var(--closeToContent_Color)'}}></div>
					{wallparersList.map((image, i)=>{
						return <img className = "chatMenuWallpaper" key = {i} id = {i} style = {currentWallpaper == i?{border:"3px solid var(--blueColor)"}:{}} src={image} alt="" onClick = {changeWallpaper}/>
					})}
				</div>
			</div>
				
				<div className = "showAttachmentsBtn" onClick = {()=>{setOpenAttachments(!openAttachments)}}>
					{!openAttachments?
						<div>
							<i className="fas fa-paperclip"></i> 
							<b>Показать вложения</b>
						</div>:
						<div>
							<i className="fas fa-arrow-left"></i>
							<b>Назад</b>
						</div>
					}
				</div>
			{openAttachments?
				<div style = {{display:'flex', animation:'fadeInBottom .4s forwards', flexWrap:'wrap', height:window.innerHeight-window.innerHeight/2, overflowY:'auto', margin:"5px 0"}}>
					{
					chatData.findIndex((el)=>{return el.image !== ""}) === -1?
						<div style = {{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', width:'100%', textAlign:'center'}}>
							<h3>Вложений пока нет</h3>
						</div>:
						chatData.slice(0).reverse().map((message)=>{
							if(message.image.length !== 0) return <div className = "AttachmentImageItem"><img src={message.image} alt=""/></div>
						})
					}
				</div>:
				null
			}
		</div>
	)
}
