import React, {useState, useRef, useEffect} from 'react'
import ScheduleData from '../../../Data/Schedules/Schedule_191_722.json'
import WeekDays from '../../../Data/DaysOfWeekFull.json'
import ScheduleDay from '../Schedule_Components/ScheduleCard_Components/ScheduleDay'
import wordDateDisplay from '../../../Functions/wordDateDisplay'
import { Link } from 'react-router-dom'
import { PageDots } from '../../General_Components/PageDots'
import inTimeInterval from '../../../Functions/inTimeInterval'
import findCurrentPage from '../../../Functions/findCurrentPage'
import isNextSubject from '../../../Functions/isNextSubject'
export const TodaysSchedule = () => {
	var currentDay = new Date()
	const weekDays = WeekDays.engFull
	const [currentDayVisible, setCurrentDayVisible] = useState(0)
	const elRef = useRef(null)
	const [areDotsVisible, setAreDotsVisible] = useState(false)

	useEffect(() => {
		if(currentDay.getDay() != 0){
			let now = ScheduleData[weekDays[currentDay.getDay()-1]].findIndex((el)=>{
				return inTimeInterval(el.time, currentDay) || isNextSubject(el.time, currentDay)
			})
			elRef.current.scrollTop = 180*now
		}
	}, [])
	return (
		<Link to = "/schedule">
			<div style = {window.innerWidth<1000?{display:'none'}:{}}>
				<PageDots dotsAmount = {ScheduleData[weekDays[currentDay.getDay()-1]]} currentDot = {currentDayVisible} isVertical = {true} isFilled = {false} isVisible = {areDotsVisible}/>
			</div>
			<div className = "TodaysSchedule_wrapper" style = {currentDay.getDay() === 0?{marginRight:'10px'}:{}}>
				<div className = "TodaysSchedule" ref = {elRef} onScroll = {(e)=>findCurrentPage(e, setCurrentDayVisible, setAreDotsVisible, 60)}>
					{currentDay.getDay() !== 0?
						ScheduleData[weekDays[currentDay.getDay()-1]].map((subject, i)=>{
							return(
								<ScheduleDay page = "profile" currentDayVisible = {currentDayVisible} id = {i} key = {i} isToday = {true} subject = {subject} currentDay = {currentDay} mode = {"start"}/>
							)
						}):
						<h2 style = {{position:'absolute', top:"50%", left:'50%', transform:'translate(-50%, -50%)', textAlign:'center', width:'100%'}}>Сегодня выходной</h2>
					}
					{currentDay.getDay() !== 0 && ScheduleData[weekDays[currentDay.getDay()-1]].length === 0?<h2 style = {{position:'absolute', top:"50%", left:'50%', transform:'translate(-50%, -50%)', textAlign:'center', width:'100%'}}>Сегодня нет пар!</h2>:<></>}
				</div>
				<div style = {window.innerWidth>1000?{display:'none'}:{}}>
					<PageDots dotsAmount = {ScheduleData[weekDays[currentDay.getDay()-1]]} currentDot = {currentDayVisible} isVertical = {true} isFilled = {false} isVisible = {areDotsVisible}/>
				</div>
				
			</div>
		</Link>
	)
}
