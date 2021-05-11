import React from 'react'

export const OptionList = ({arrayOfOptions, currentOption, changeValFunc, icon}) => {
	return (
		<div className = "OptionList">
			<i className={icon} style = {icon === undefined?{display:'none'}:{}}></i>
			<select value = {currentOption} onChange = {(e)=>changeValFunc(e.target.value)}>
				{arrayOfOptions.map((el)=>{
					return <option value={el}>{el}</option>
				})}
			</select>
		</div>
	)
}
