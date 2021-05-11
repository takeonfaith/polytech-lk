import React from 'react'
import { ExamGradesScale } from './ExamsTable_Components/ExamGradesScale'
import { ExamStat } from './ExamsTable_Components/ExamStat'

export const ExamsTable = ({AcadPerformanceData, setCurrentSubjectClicked, setOpenStatisticsMenu}) => {
	return (
		<div className = "ExamsTable">
			<h1>Экзамены</h1>
			<ExamGradesScale AcadPerformanceData = {AcadPerformanceData}/>
			{AcadPerformanceData['exams'].map(({id, name, date, grade, teacher}, i)=>{
				return <ExamStat key = {i} index = {i} id = {id} name = {name} date = {date} grade = {grade} teacher = {teacher} setCurrentSubjectClicked = {setCurrentSubjectClicked} setOpenStatisticsMenu = {setOpenStatisticsMenu}/>
			})}
		</div>
	)
}
