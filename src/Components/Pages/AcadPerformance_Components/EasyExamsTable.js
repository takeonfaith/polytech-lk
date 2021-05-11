import React from 'react'
import { ExamStat } from './ExamsTable_Components/ExamStat'

export const EasyExamsTable = ({AcadPerformanceData, setCurrentSubjectClicked, setOpenStatisticsMenu}) => {
	return (
		<div className = "EasyExamsTable">
			<h1>Зачеты</h1>
			{AcadPerformanceData['easyExams'].map(({id, name, date, grade, teacher}, i)=>{
				return <ExamStat key = {i} id = {id} index = {i} name = {name} date = {date} grade = {grade} teacher = {teacher} setCurrentSubjectClicked = {setCurrentSubjectClicked} setOpenStatisticsMenu = {setOpenStatisticsMenu}/>
			})}
		</div>
	)
}
