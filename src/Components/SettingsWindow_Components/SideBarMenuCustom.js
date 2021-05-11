import React from 'react'
import NavList from '../LeftSideBar_Components/NavList'

export const SideBarMenuCustom = (props) => {
	return (
		<div className = "SideBarMenuCustom">
			<div className = "settingsUnit">
				<h2>Настройка меню</h2>
				{<NavList 
					shortCardCallBackFunc = {props.shortCardCallBackFunc} 
					shortCardConfig = {props.shortCardConfig} 
					leftSideNav = {props.defaultNav} 
					mode = "settings" 
					sideBarConfig = {props.sideBarConfig} 
					sideBarConfigCallBackFunc = {props.sideBarConfigCallBackFunc}
					showBottomHint = {props.showBottomHint}
					BottomHintCallBackFunc = {props.BottomHintCallBackFunc}
					/>
				}
			</div>
		</div>
	)
}
