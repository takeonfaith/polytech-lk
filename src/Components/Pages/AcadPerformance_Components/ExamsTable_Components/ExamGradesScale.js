import React from 'react'

export const ExamGradesScale = ({AcadPerformanceData}) => {
	const grades = [null, 2, 3, 4, 5]
	function opacityController(el) {
		if(AcadPerformanceData['exams'].every((ex)=>{return ex.grade !== el})) return true
		return false
	}
	return (
		<div className = "ExamGradesScale">
			{grades.map((el, i)=>{
				return <h3 key = {i} style = {opacityController(el)?{opacity:.4}:{}}>{el}</h3>
			})}
		</div>
	)
}
