import React from 'react'

export const InputField = ({type = 'text', placeholder, value, onChange, title}) => {
	return (
		<div className = "InputField" >
			<p className = "InputField_title">{title}</p>
			<input type={type} placeholder = {placeholder} defaultValue = {value} onChange = {onChange}/>
		</div>
	)
}
