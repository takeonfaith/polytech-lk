import React from 'react'
import Switch from '../General_Components/Switch'

export const Appearance = (props) => {
	var t = [...props.shortCardBg]
	function changeColor(event) {
		t[event.target.id] = event.target.value
		props.shortCardBgCallBackFunc(t)
	}
	return (
		<div className = "Appearance">
			<div className = "settingsUnit">
				<h2 className = "settingsUnit_Title">
					Темная тема
				</h2>
				<Switch
					currentPosition = {props.darkTheme}
					callBackFunc = {props.darkThemeCallBackFunc}
				/>
			</div>
			<div className = "settingsUnit">
				<h2>Настройка цветов на карточках быстрого доступа</h2>
				{props.shortCardBg.map((color, i)=>{
					return <input type="color" name="" key = {i} value = {color} id={i} onChange = {changeColor}/>
				})}
				
			</div>
		</div>
	)
}
