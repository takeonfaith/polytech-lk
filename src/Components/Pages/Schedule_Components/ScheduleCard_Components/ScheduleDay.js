import React from 'react'
import inTimeInterval from '../../../../Functions/inTimeInterval'
import shortWordDisplay from '../../../../Functions/shortWordDisplay'
import isNextSubject from "../../../../Functions/isNextSubject";
export default function ScheduleDay({isToday, subject, currentDay, mode, currentDayVisible, id, page, isDownScaled = false}) {
	return (
		<div 
			className = {"ScheduleDay " + (currentDayVisible == id?"visible":"hidden")} 
			style = 
				{
					isToday?
					inTimeInterval(subject.time, currentDay)?
					{
						animation: "popUp .8s forwards",
						boxShadow:"0 0 30px rgb(119 91 184)",
						background:"linear-gradient(45deg,rgb(119 91 184), rgb(164 143 212))",
						color:"#fff", 
						scrollSnapAlign: mode
					}:
					isNextSubject(subject.time, currentDay)?
					{
						scrollSnapAlign: mode
					}:
					{}:
					{}
				}>
			<h4 className = "timeAndPlace">
				<span className = "time" style = {isToday && inTimeInterval(subject.time, currentDay)?{color:"rgba(157, 177, 250)"}:{}}>{subject.time}</span>
				<span className = "place" style = {isToday && inTimeInterval(subject.time, currentDay)?{color:"rgb(255, 171, 237)"}:{}}> {subject.place}</span>
				<span className = "currentOrNext" style = {!isToday || (!inTimeInterval(subject.time, currentDay) && !isNextSubject(subject.time, currentDay))?{display:'none'}:{}}>{isToday?inTimeInterval(subject.time, currentDay)?"Сейчас":isNextSubject(subject.time, currentDay)?"Следующая":null:null}</span>
			</h4> 
			<h3>{page !== 'profile'?subject.subject:shortWordDisplay(subject.subject, 25)}</h3>
			{page !== 'profile'?<p>{subject.teacher}</p>:<p>{shortWordDisplay(subject.teacher, 25)}</p>}
			<p>{subject.dateInterval}</p>
		</div>
	)
}
