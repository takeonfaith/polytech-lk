import React from 'react'
import WideBtn from '../General_Components/wideBtn'
export const Security = () => {
	return (
		<div className = "Security">
			<div style = {window.innerWidth > 650?window.innerWidth>1500?{width:'400px'}:{width:'200px'}:{width:'100%'}} className="settingsUnit">
				<WideBtn bg = "var(--purpleAndPinkGradient)" btnText = "Включить двухфакторную аутентификацию"/>
			</div>
			<div style = {window.innerWidth > 650?window.innerWidth>1500?{width:'400px'}:{width:'200px'}:{width:'100%'}} className="settingsUnit">
				<WideBtn bg = "var(--purpleGradient)" btnText = "Поменять пароль"/>
			</div>
		</div>
	)
}
