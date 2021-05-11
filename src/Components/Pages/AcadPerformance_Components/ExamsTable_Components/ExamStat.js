import React from 'react'
import dotDateDisplay from '../../../../Functions/dotDateDisplay'
import shortWordDisplay from '../../../../Functions/shortWordDisplay'

export const ExamStat = ({id, name, date, grade, teacher, index, setCurrentSubjectClicked, setOpenStatisticsMenu}) => {
	function chooseGrade(grade){
		if(window.innerWidth > 1000){
			switch (grade) {
				case true:
					return "Зачет"
				case false:
					return "Незачет"
				case 5:
					return "Отлично"
				case 4:
					return "Хорошо"
				case 3:
					return "Удовлетв."
				case 2:
					return "Неуд."
				default:
					return "Неверная оценка"
			}
		}
		else return grade
	}

	function chooseColor(grade){
		switch (grade) {
			case true:
				return "var(--greenColor)"
			case false:
				return "var(--redColor)"
			case 5:
				return "var(--greenColor)"
			case 4:
				return "var(--blueColor)"
			case 3:
				return "var(--orangeColor)"
			case 2:
				return "var(--redColor)"
			default:
				return "blue"
		}
	}
	return (
		<div className = "ExamStat" onClick = {()=>{setCurrentSubjectClicked(id); setOpenStatisticsMenu(true)}}>
			<div className = "examSubjectName" style = {grade === true || grade === false?{width:'370px'}:{}}>
				<div style = {{width:'10px'}}>{index+1}</div>
				<h4>{shortWordDisplay(name, 40) }</h4>
			</div>
			{
				grade !== true && grade !== false?
				<span className = "outerLine">
					<span className = "innerLine" style = {{width:((grade-1)/4 * 100) + '%'}}></span>
				</span>:
				grade === true?<i className="fas fa-check-circle" style = {{color:"#69CD91", filter:'drop-shadow(0 0 10px #69CD91)'}}></i>:<i className="fas fa-times-circle" style = {{color:"#cd6c69", filter:'drop-shadow(0 0 10px #cd6c69)'}}></i>
			}
			
			<p className = "examGrade" style = {window.innerWidth<1000? grade == true || grade == false?{display:'none'}:{fontWeight:'bold', color:chooseColor(grade)}:{}}>{chooseGrade(grade)}</p>
			<p className = "examDate">{dotDateDisplay(new Date(date))}</p>
			<div className = "examTeacher">{teacher}</div>
		</div>
	)
}
