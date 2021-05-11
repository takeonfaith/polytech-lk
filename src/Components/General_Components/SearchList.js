import React from 'react'

export const SearchList = ({arrayOfOptions, value, changeOption}) => {
	return (
		<div className = "SearchList">
			<input list="brow" value = {value} onChange = {changeOption}/>
			<datalist id="brow">
				{arrayOfOptions.map((o, i)=>{
					return(
						<div>
							<option id = {i} key = {i} value = {o.name}/>
						</div>
					)
				})}
			</datalist>
		</div>
	)
}
