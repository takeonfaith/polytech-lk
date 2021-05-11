import React, {useState} from 'react'
import Schedule_Session_Data from '../../Data/Schedules/Schedule_Session_Data.json'
import WideBtn from '../General_Components/wideBtn';
import { ScheduleSessionCard } from './Schedule_Components/ScheduleSessionCard';
import {useHistory} from 'react-router-dom'
export const Schedule_Session = () => {
	const history = useHistory()
	
	function groupBy(objectArray, property) {
		objectArray.sort((a, b)=>{
			var fD = new Date(a[property]), sD = new Date(b[property])
			if(fD.getTime() > sD.getTime()) return 1
			else if(fD.getTime() < sD.getTime()) return -1
			else return 0
		})
		return objectArray.reduce((acc, obj) => {
			const key = obj[property];
			if (!acc[key]) {
				acc[key] = [];
			}
			// Add object to list for given key's value
			acc[key].push(obj);
			return acc;
		}, {});
	}
	let groupedSchedule = groupBy(Schedule_Session_Data, 'dateInterval')
	const [showPrevExams, setShowPrevExams] = useState(false)
	function showPrev() {
		setShowPrevExams(!showPrevExams)
	}
	var subjectCounter = 0
	return (
		<div className = "Schedule_Session" style = {{display:'flex', flexDirection:'column', alignItems:'center'}}>
			<div className = "backBtnAndPrevBtn" style = {{textAlign:'center'}}>
				<button onClick = {()=>history.goBack()} className = "backBtn"><i className="fas fa-arrow-left"></i></button>
				{Schedule_Session_Data.length == 0?
					<h2>Расписания еще нет</h2>:
					<div className = "prevExams" style = {{width:100 + "%"}}>
						<WideBtn btnText = "Предыдущие экзамены" Class = {showPrevExams?"prevBtn openPrev":"prevBtn closePrev"} bg = "var(--reallyBlueColor)" func = {showPrev} imgUrl = "fas fa-chevron-down"/>
					</div>
				}
			</div>
			{Schedule_Session_Data.length == 0?<img src="https://cdn.shopify.com/s/files/1/1061/1924/products/Sad_Face_Emoji_1024x1024.png?v=1571606037" style = {{width:"10%"}} alt=""/>:""}
			<div style = {{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
				{Object.keys(groupedSchedule).map((day, i)=>{
					let daysLeft = Math.ceil((new Date(day) - new Date().getTime())/1000/60/60/24)
					if(daysLeft >= 0 || showPrevExams){
						subjectCounter++;
						return(
							<ScheduleSessionCard 
								key = {i}
								date = {day}
								daysLeft = {daysLeft}
								session = {groupedSchedule[day]}
							/>
						)
					}
				})}
			</div>
			{subjectCounter == 0 && Schedule_Session_Data.length != 0?
			<div style = {{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
				<h1>Ура! Экзамены закончились!</h1>
				<img src="https://media.giphy.com/media/avmtyPGaWB1mry4x1H/giphy.gif" alt="" style = {{width:"50%"}}/>
			</div>
			:
			<></>
			}
		</div>
	)
}
