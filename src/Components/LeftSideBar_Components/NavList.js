import React from 'react'
import NavItem from './NavList_Components/NavItem'
import Chats from '../../Data/Messages/Chats.json'
function NavList(props) {
	
	return (
		<div className = "NavList">
			{props.leftSideNav.map((navItem)=>{
				return (
					<NavItem 
						iconRight = {navItem.iconRight}
						icon = {navItem.icon} 
						link = {navItem.path}
						newNotif = {navItem.newNotif}
						openedOtherPages = {props.openedOtherPages}
						key = {navItem.id} 
						id = {navItem.id} 
						title = {navItem.title} 
						active = {navItem.active}  
						shortCardCallBackFunc = {props.shortCardCallBackFunc}
						leftSideNav = {props.leftSideNav}
						sideBarConfig = {props.sideBarConfig}
						shortCardConfig = {props.shortCardConfig}
						Chats = {Chats}
						currentPage = {props.currentPage} 
						mode = {props.mode}
						sideBarConfigCallBackFunc = {props.sideBarConfigCallBackFunc}
						mobileMenuOpened = {props.mobileMenuOpened}
						MobileMenuCallBackFunc = {props.MobileMenuCallBackFunc} 
						openOtherPagesCallBackFunc = {props.openOtherPagesCallBackFunc}
						showBottomHint = {props.showBottomHint}
						BottomHintCallBackFunc = {props.BottomHintCallBackFunc}
					/>
				)
			})}
		</div>
	)
}

export default NavList
