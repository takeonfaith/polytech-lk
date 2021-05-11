import React from 'react'

function SettingsBtn(props) {
	function openSettings() {
		props.SettingsWindowCallBackFunc(!props.openSettingsWindow)
	}
	return (
		<div className = "SettingsBtn" onClick = {openSettings} style = {props.openSettingsWindow?{transform:"scale(.95)"}:{}}>
			<i className="fas fa-sliders-h" style = {props.openSettingsWindow?{transform:"scale(0.8)", opacity:0.6}:{}}></i>
			<div>Настройки</div>
		</div>
	)
}

export default SettingsBtn
