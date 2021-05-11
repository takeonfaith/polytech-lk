import React from 'react'

export const ScheduleSessionExam = ({session, wordDateDisplay}) => {
	//  style = {props.isToday && inTimeInterval(props.subject.time, props.currentDay)?{color:"rgb(255, 171, 237)"}:{}}
	return (
		<div className = "ScheduleDay">
			<h4 className = "timeAndPlace">
				<span className = "time" >{session.time}</span>
				<span className = "place"> <a href={session.link} style = {{color:"var(--redColor)"}}>{session.place}</a> </span>
			</h4> 
			<h3>{session.subject}</h3>
			<p>{session.teacher}</p>
		</div>
	)
}
