import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import callBottomHint from '../../../Functions/callBottomHint'
import Chats from '../../../Data/Messages/Chats.json'
import NotificationsData from '../../../Data/Notifications.json'
function NavItem(props) {
	function changePage(event) {
		if(event.target.id == 7){
			props.openOtherPagesCallBackFunc(!props.openedOtherPages)
		}
		else{
			// props.currentPageCallBackFunc(event.target.id)
			props.MobileMenuCallBackFunc(!props.mobileMenuOpened)
		}
	}
	// function checkIfShouldShowNotif(id) {
	// 	if(props.Chats.some((chat)=>{return chat.seen !== true})) props.leftSideNav[1].newNotif = true
	// 	else props.leftSideNav[1].newNotif = false
	// 	if(NotificationsData.length !== 0) props.leftSideNav[3].newNotif = true
	// 	else props.leftSideNav.newNotif = false
	// }
	
	// useEffect(() => {checkIfShouldShowNotif(props.id)}, [])
	var canOpen = props.iconRight != undefined
	var NavItemClass = props.id == props.currentPage || (props.id == 7 && props.currentPage > 7 && !props.openedOtherPages)?"NavItem active":"NavItem"
	if (props.mode == "sidebar") {		
		return (
			<Link to = {props.id != 7?props.link:"#"} style = {{textDecoration:"none"}} id = {props.id} onClick = {changePage}>
				<div className={NavItemClass} id = {props.id} onClick = {changePage}>
					<i className={props.icon} id = {props.id} onClick = {changePage}></i>
					{props.newNotif?<span className = "notificationCircle"></span>:<div></div>}
					{props.title}
					<i className = {canOpen?props.iconRight:""} id = {props.id} onClick = {changePage} style = {props.openedOtherPages?{transform:'rotate(180deg)'}:{}}></i>
				</div>
			</Link>
		)
	}
	else if(props.mode == "settings"){
		var isInShortCard = props.shortCardConfig.includes(props.id)
		var inSideBar = props.sideBarConfig.includes(props.id)
		var isCrucial = props.id == 0 || props.id == 2 || props.id == 7
		var shortCardCrucial = props.id == 0 ||  props.id == 7
		var checkboxIcon = isCrucial?"fas fa-lock fa-fw":inSideBar?"fas fa-check-circle fa-fw":"far fa-circle fa-fw"
		var homeIcon = shortCardCrucial?"fas fa-lock fa-fw":"fas fa-home fa-fw"
		var checkboxStyle = isCrucial?{opacity:.5}:inSideBar?{color:"var(--blueColor)", opacity:1}:{}
		var homeStyle = isInShortCard?{color:"#bb98ff", animation:""}:{opacity:.3, animation:""}
		var tempConfig = props.sideBarConfig
		var tempCardConfig = [...props.shortCardConfig]
		
		function includeFunc(event, crucial, isInList, tempConfig, restriction, callBackFunc, where) {
			if(!crucial){
				if(isInList) {
					tempConfig = tempConfig.filter((el)=>el != event.target.id)
					if(where === "sideBar") callBottomHint("Элемент убран из меню", props.BottomHintCallBackFunc, 1000)
					else callBottomHint("Элемент убран с начального экрана", props.BottomHintCallBackFunc, 1000)
				}
				else if(tempConfig.length<restriction) {
					tempConfig.push(parseInt(event.target.id))
					if(where === "sideBar") callBottomHint("Элемент добавлен в меню", props.BottomHintCallBackFunc, 1000, "#53f7a487")
					else callBottomHint("Элемент добавлен на начальный экран", props.BottomHintCallBackFunc, 1000, "#53f7a487")
				}
				else {
					event.target.style.animation = "nope .3s forwards"
					setTimeout(()=>{event.target.style.animation = "none"}, 300)
					callBottomHint("Нельзя добавить больше, чем " + restriction, props.BottomHintCallBackFunc, 1000, "#f5517073")
				}
				callBackFunc(tempConfig, props.BottomHintCallBackFunc, 1000)
			}
			else {
				event.target.style.animation = "locked .3s forwards"
				setTimeout(()=>{
					event.target.style.animation = "none"
				}, 300)

				callBottomHint("Этот элемент нельзя изменить", props.BottomHintCallBackFunc, 1000, "#f5517073")
			}
		}
		function includeOnHomeScreen(event) {
			event.stopPropagation();
			includeFunc(event, shortCardCrucial, isInShortCard, tempCardConfig, 4, props.shortCardCallBackFunc, "home")
		}

		function includeInSideBar(event) {
			event.stopPropagation();
			includeFunc(event, isCrucial, inSideBar, tempConfig, 9, props.sideBarConfigCallBackFunc, "sideBar")
		}
		return(
			<div className="NavItem settings" id = {props.id} onClick = {includeInSideBar}>
				<div style = {{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
					<i className={props.icon} id = {props.id} onClick = {includeInSideBar} style = {checkboxStyle}></i>
					<span style = {checkboxStyle} id = {props.id} onClick = {includeInSideBar}>{props.title}</span>
				</div>
				<div>
					<i className={homeIcon} id = {props.id} style = {homeStyle} onClick = {includeOnHomeScreen}></i>
					<i className = {checkboxIcon} style = {checkboxStyle} id = {props.id} onClick = {includeInSideBar}></i>
				</div>
			</div>
		)
	}
}

export default NavItem
