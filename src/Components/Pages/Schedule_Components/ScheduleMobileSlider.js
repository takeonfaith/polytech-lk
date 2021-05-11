import React from 'react'

export default function ScheduleMobileSlider({todaysIndex, discreteRangeValue, daysOfWeek, rangeShiftValue, changeRangeValue}) {
	return (
		<div className = "sliderWrapper">
			<div className="weekDays">
				{daysOfWeek.map((day, i)=>{
					return(
						<div className="day" key = {i} id = {i} onClick = {changeRangeValue} style = {
							i == todaysIndex?
								i == discreteRangeValue?
								{
									opacity:"1",
									fontSize:"1.1em",
									fontWeight:"bold",
									color:"var(--blueColor)"
								}:
								{
									fontWeight:"bold",
									color:"var(--blueColor)"
								}:
							i == discreteRangeValue?
							{
								opacity:"1",
								fontSize:"1.1em", 
								fontWeight:"bold"
							}:
							{}
						}>{day}</div>
					)
				})}
			</div>
			<input className = "inputSlider" id = "inputSlider" type = "range" min = "0" max = "5" step = "0.001" value = {rangeShiftValue} onChange = {changeRangeValue}/>
		</div>
	)
}
