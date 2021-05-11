import React from 'react'
import '../Styles/SettingsWindow.css'
import { SideBarMenuCustom } from './SettingsWindow_Components/SideBarMenuCustom'
import { Appearance } from './SettingsWindow_Components/Appearance'
import { GeneralSettings } from './SettingsWindow_Components/GeneralSettings'
import { PageWithSlideMenu } from './General_Components/PageWithSlideMenu'
import { Account } from './SettingsWindow_Components/Account'
import { Security } from './SettingsWindow_Components/Security'


export default function SettingsWindow(props) {
	function closeSettings() {
		props.SettingsWindowCallBackFunc(!props.openSettingsWindow)
	}
	var settingsPages = ["Общие", "Внешний вид", "Меню", "Аккаунт", "Безопасность"]
	const content = [
		<GeneralSettings 
			BottomHintCallBackFunc = {props.BottomHintCallBackFunc}
			notifications = {props.notifications}
			currentLang = {props.currentLang}
			NotifCallBackFunc = {props.NotifCallBackFunc}
			CurrentLangCallBackFunc = {props.CurrentLangCallBackFunc}
		/>,
		<Appearance
			darkTheme={props.darkTheme}
			darkThemeCallBackFunc={props.darkThemeCallBackFunc}
			shortCardBg={props.shortCardBg}
			shortCardBgCallBackFunc={props.shortCardBgCallBackFunc}
		/>,
		<SideBarMenuCustom
			defaultNav={props.defaultNav}
			shortCardConfig={props.shortCardConfig}
			shortCardCallBackFunc={props.shortCardCallBackFunc}
			sideBarConfigCallBackFunc={props.sideBarConfigCallBackFunc}
			sideBarConfig={props.sideBarConfig}
			showBottomHint = {props.showBottomHint}
			BottomHintCallBackFunc = {props.BottomHintCallBackFunc}
		/>,
		<Account/>, 
		<Security/>
	]

	return (
		<div className="SettingsWindow" style={props.openSettingsWindow ? { opacity: "1", transform: "scale(1) translate(-50%, -50%)", zIndex: "3" } : { opacity: "0", transform: "scale(.9) translate(-55%, -55%)", zIndex: "-1" }}>
			<div className="titleAndClose">
				<h1>Настройки</h1>
				<img src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_exit-256.png" alt="" onClick={closeSettings} />
			</div>
			<PageWithSlideMenu contentArray = {content} menuArray = {settingsPages}/>		
		</div>
	)
}
