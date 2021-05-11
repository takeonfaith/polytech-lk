import React from 'react'
import wordDateDisplay from '../../../Functions/wordDateDisplay'
import week from '../../../Data/DaysOfWeekFull.json'
import { ScheduleSessionExam } from './ScheduleSession/ScheduleSessionExam'
export const ScheduleSessionCard = ({ date, session, daysLeft }) => {
	let isToday = true
	var daysWord = daysLeft >= 0 ?
		daysLeft % 10 > 1 && daysLeft % 10 < 5 && !(daysLeft > 10 && daysLeft < 20) ?
			"дня" :
			daysLeft == 0 ?
				"Сегодня" :
				daysLeft % 10 > 4 || daysLeft % 10 == 0 || daysLeft > 10 && daysLeft < 20 ?
					"дней" :
					daysLeft % 10 == 1 ?
						"день" :
						"Событие прошло" : "Событие прошло"
	return (
		<div className="ScheduleSessionCard" style={{ animation: "fadeInBottom .3s forwards" }}>
			<div className="dayAndAmount">
				{/* style = {isToday?{color:"var(--blueColor)", fontWeight:700}:{}} */}
				<span>{wordDateDisplay(new Date(date))}, {week.short[((new Date(date)).getDay() - 1) % 7]}</span>
				<span style=
					{
						daysLeft > 0 ?
							daysLeft > 2 ?
								daysLeft > 5 ?
									{ color: "var(--greenColor)" } :
									{ color: "var(--orangeColor)" } :
								{ color: "var(--redColor)" } :
							daysLeft == 0 ?
								{ color: "rgb(115 148 255)", textShadow: "0 0 10px rgb(115 148 255)" } :
								{opacity:.7}
					}
				>
					{daysLeft > 0 ? (daysLeft == 1 || daysLeft > 20 && daysLeft % 10 == 1 ? "Остался " : "Осталось ") + daysLeft : ""} {daysWord}</span>
			</div>
			<div className="ScheduleCard" >
				{session.map((el, i) => {
					return (
						<ScheduleSessionExam
							key={i}
							session={session[i]}
							wordDateDisplay={wordDateDisplay}
						/>
					)
				})}
			</div>
		</div>
	)
}
