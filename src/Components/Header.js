import React from 'react'
import '../Styles/Header.css'
import MobileMenuBtn from './Header_Components/MobileMenuBtn'
import SettingsBtn from './Header_Components/SettingsBtn'
function Header(props) {
	return (
		<div className="Header">
			<MobileMenuBtn MobileMenuCallBackFunc = {props.MobileMenuCallBackFunc} mobileMenuOpened = {props.mobileMenuOpened}/>
			<h2>{props.title}</h2>
			<SettingsBtn
				openSettingsWindow = {props.openSettingsWindow}
				SettingsWindowCallBackFunc = {props.SettingsWindowCallBackFunc}/>
		</div>
	)
}

export default Header
