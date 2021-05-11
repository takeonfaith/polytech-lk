import React, {useState} from 'react'
import ScheduleCard from './Schedule_Components/ScheduleCard'
import '../../Styles/Schedule.css'
import TodayScheduleBtn from './Schedule_Components/TodayScheduleBtn'
import ScheduleInfo_191_721 from '../../Data/Schedules/Schedule_191_721.json'
import ScheduleInfo_191_722 from "../../Data/Schedules/Schedule_191_722.json"
import ScheduleInfo_191_723 from '../../Data/Schedules/Schedule_191_723.json'
import ScheduleInfo_191_724 from '../../Data/Schedules/Schedule_191_724.json'
import ScheduleInfo_191_725 from '../../Data/Schedules/Schedule_191_725.json'
import ScheduleMobileSlider from './Schedule_Components/ScheduleMobileSlider';
import StudentsData from '../../Data/StudentsData.json'
import DaysOfWeekFull from '../../Data/DaysOfWeekFull.json'
import Groups from '../../Data/Groups.json'
import { Link } from 'react-router-dom'
import WideBtn from '../General_Components/wideBtn'
function Schedule(props) {
	const [groupNumber, setGroupNumber] = useState(StudentsData.group)
	const groups = Groups
	const [groupId, setGroupId] = useState(
		()=> {
			for (let i = 0; i < groups.length; i++) {
				if(groups[i].name == groupNumber){
					return i
				}
			}
		}
	)
	const scheduleArray = [ScheduleInfo_191_721, ScheduleInfo_191_722, ScheduleInfo_191_723, ScheduleInfo_191_724, ScheduleInfo_191_725]
	const [schedule, setSchedule] = useState(scheduleArray[groupId])
	const daysOfWeek = DaysOfWeekFull.short
	var currentDay = new Date()
	const [todaysIndex, setTodaysIndex] = useState(
		Object.keys(schedule).findIndex((day, i) =>{
			return i + 1 == currentDay.getDay()
		}) == -1?
		undefined:Object.keys(schedule).findIndex((day, i) =>{
			return i + 1 == currentDay.getDay()
		})
	)
	const [rangeShiftValue, setRangeShiftValue] = useState(todaysIndex)
	const [discreteRangeValue, setDiscreteRangeValue] = useState(todaysIndex)
	
	const [mode, setMode] = useState("start")
	const scrollRef = React.useRef(null)
	const [scrollLeftValue, setScrollLeftValue] = useState(0)
	
	
	function changeRangeValue(event){
		if(event.target.id != "inputSlider"){
			setRangeShiftValue(event.target.id)
			setDiscreteRangeValue(Math.round(event.target.id))
		}
		else{
			setRangeShiftValue(event.target.value)
			setDiscreteRangeValue(Math.round(event.target.value))
		}
	}
	function modeCallBackFunc(){
		setMode("start")
		setTimeout(()=>setMode("none"), 200)
		setRangeShiftValue(todaysIndex)
		setDiscreteRangeValue(todaysIndex)
	}

	function changeGroupNumber(event) {
		setGroupNumber(event.target.value)
		groups.map((g)=>{
			if(g.groupName == event.target.value) setSchedule(scheduleArray[g.id])
		})
	}
	const [showMore, setShowMore] = useState(false)
	function showMoreThings() {setShowMore(!showMore)}
	
	return (
		<div className = "Schedule">
			<div style = {{display:'flex', flexDirection:'column', alignItems:'center'}}>
				<div onClick = {showMoreThings} className = "showMoreBtn" style = {props.isMobile?showMore?{maxWidth:props.mobileWidth-40}:{maxWidth:props.mobileWidth-40}:{display:'none'}}>
					<i className="fas fa-caret-down" style = {showMore?{transform:'rotate(180deg)'}:{}}></i>
				</div>
				<div className = "topSection" style = {props.isMobile?showMore?{background:'var(--leftSideBar_Color)', width:"100%",marginTop:"10px", maxWidth:props.mobileWidth-60,boxShadow:'inset 0 0 3px rgb(0 0 0 / 22%)', padding:"10px", animation:"heightAnimation .3s forwards", borderRadius:"var(--standartBorderRadius1)"}:{animation:"reverseheightAnimation .3s forwards"}:{}}>
					<div className = "groupChoice" style = {props.isMobile?showMore?{}:{display:'none'}:{}}>
						<b style = {{marginRight:'10px'}}>Группа</b> 
						<input list="brow" value = {groupNumber} onChange = {changeGroupNumber}/>
						<datalist id="brow">
							{groups.map((group, i)=>{
								return(
									<option id = {i} key = {i} value = {group.groupName}/>
								)
							})}
						</datalist>  
					</div>
					<Link to = "/schedule/session" className  = "scheduleBtn" style = {props.isMobile?showMore?{width:"100%"}:{display:'none'}:{}}>
						<div className = "sessionBtn" style = {{width:"100%"}}>
							<WideBtn btnText = "Расписание сессии" bg = "linear-gradient(-45deg, var(--reallyBlueColor), rgb(112 145 255))"/>
						</div>
					</Link>
					<div className  = "scheduleBtn" style = {props.isMobile?showMore?{width:100 + "%"}:{display:'none'}:{width:100 + "%"}}>
						<WideBtn btnText = "Расписание на сегодня" bg = "linear-gradient(45deg, var(--redColor), rgb(193 132 218))" func = {modeCallBackFunc}/>
					</div>
				</div>
			</div>
			<div className = "scheduleWindow">
				<div className="scheduleCardsWrapper" ref = {scrollRef} onScroll={()=>{setScrollLeftValue(scrollRef.current.scrollLeft)}} style = {props.isMobile?{width:100 + "%"}:{width:window.innerWidth-350 + "px" }}>
					{Object.keys(schedule).map((day, i) =>{
						return (
							<ScheduleCard 
								key = {i}
								dayArray = {schedule[day]}
								mode = {mode}
								setMode = {setMode}
								index = {i}
								currentDay = {currentDay}
								darkTheme = {props.darkTheme}
								scrollLeftValue = {scrollLeftValue}
								discreteRangeValue = {discreteRangeValue}
								mobileWidth = {props.mobileWidth} 
								isMobile = {props.isMobile}
							/>
						)
					})}
				</div>
			</div>
			<ScheduleMobileSlider todaysIndex = {todaysIndex} discreteRangeValue = {discreteRangeValue} daysOfWeek = {daysOfWeek} rangeShiftValue = {rangeShiftValue} changeRangeValue = {changeRangeValue}/>
			
		</div>
	)
}

export default Schedule
