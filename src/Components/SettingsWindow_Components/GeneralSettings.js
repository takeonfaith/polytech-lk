import React, {useState} from 'react'
import callBottomHint from '../../Functions/callBottomHint'
import { CustomSelect } from '../General_Components/CustomSelect'
import Switch from '../General_Components/Switch'
import ruFlag from '../../Imgs/russia.png'
import usFlag from '../../Imgs/united-states.png'
export const GeneralSettings = ({BottomHintCallBackFunc, notifications = {notifications}, currentLang, NotifCallBackFunc, CurrentLangCallBackFunc}) => {
	
	const selectOptions = [
		{
			id:0,
			option:'Русский',
			icon:ruFlag
		},
		{
			id:1,
			option:'English',
			icon:usFlag
		}
	]
	const [currentNumberOption, setCurrentNumberOption] = useState(0)
	const [currentOption, setCurrentOption] = useState(selectOptions[currentNumberOption].option)
	return (
		<div className = "GeneralSettings">
			<div className = "settingsUnit">
				<h2 className = "settingsUnit_Title">Push-Уведомления</h2>
				<Switch currentPosition = {notifications} callBackFunc = {(bool)=>{
					NotifCallBackFunc(bool)
					if(bool)callBottomHint("Уведомления включены", BottomHintCallBackFunc, 1000, "rgb(120, 155, 255)")
					else callBottomHint("Уведомления выключены", BottomHintCallBackFunc, 1000)
					}}/>
			</div>
			<div className = "settingsUnit">
				<h2 className = "settingsUnit_Title">Язык</h2>
				<CustomSelect
					selectOptions = {selectOptions} 
					iconMode = {1}
					currentOption = {currentOption} 
					changeOption = {setCurrentOption}
					currentNumberOption = {currentNumberOption}
					changeCurrentNumberOption = {setCurrentNumberOption}
				/>
			</div>
			<h2>Версия 1.03</h2>
		</div>
	)
}
