import React from 'react'
import { InputField } from '../General_Components/InputField'
import WideBtn from '../General_Components/wideBtn'

export const Account = () => {
	return (
		<div className = "Account">
			<div className = "settingsUnit">
				<h2>Данные</h2>
				<InputField type = "text" placeholder = "Ваш email" value = "omgnewpoly@yandex.ru" title = "Email"/>
				<InputField type = "password" placeholder = "Ваш пароль" value = "ilovepolytechmorethanlife" title = "Пароль"/>
				<InputField type = "tel" placeholder = "Ваш телефон" value = "88005553535" title = "Телефон"/>
			</div>
			<div style = {window.innerWidth > 650?{width:'200px'}:{width:'100%'}} className = "settingsUnit">
				<WideBtn btnText = "Выйти из аккаунта" bg = "var(--fullInfoMenu_Color)" imgUrl = "fas fa-chevron-left fa-fw" textColor = "var(--redColor)" Class = "leaveAccBtn"/>
			</div>
		</div>
	)
}
