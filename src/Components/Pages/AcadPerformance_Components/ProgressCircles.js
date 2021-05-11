import React, { useState } from 'react'

export const ProgressCircles = ({ AcadPerformanceData }) => {
	function findPercentage(where, circleMode = 0) {
		let counter = 0
		AcadPerformanceData[where].map((subject) => {
			if (where !== 'exams') { if (subject.grade !== false) counter++ }
			else {
				if (circleMode === 0) { if (subject.grade > 2) counter++ }
				else if (circleMode === 1) { if (subject.grade === 5) counter++ }
				else { if (subject.grade === 4) counter++ }
			}
		})
		let perc = (counter / AcadPerformanceData[where].length).toPrecision(2)
		return perc
	}

	function findColor(percentage) {
		if(percentage >= .8) return "#69CD91"
		else if(percentage >= .6) return "#697bcd"
		else if(percentage >= .5) return "#ee9e44"
		else return "#cd6c69"
	}
	const [circleMode, setCircleMode] = useState(0)
	const examPercentage = findPercentage('exams', circleMode)
	const easyExamPercentage = findPercentage('easyExams')
	return (
		<div className='ProgressCircles'>
			<div className="cardAndTitle" style = {window.innerWidth < 1000?{width:window.innerWidth - 200 + "px"}:{}}>
				<div className="circleCard">
					<svg style = {{filter:'drop-shadow(0 0 25px ' + findColor(examPercentage) + ')'}}>
						<g>
							<circle cx="70" cy="70" r="70"></circle>
						</g>
						<g>
							<circle cx="70" cy="70" r="70" style={{ strokeDashoffset: (1 - examPercentage) * 440 + "px", stroke:findColor(examPercentage)}} strokeLinecap="round"></circle>
						</g>
					</svg>
					<h3>{examPercentage * 100}% </h3>
					<div className="circlesLeftAndRightBtns">
						<i className="fas fa-chevron-left fa-fw" style={circleMode === 0 ? { opacity: '.3' } : {}} onClick={() => { if ((circleMode - 1) > -1) setCircleMode(circleMode - 1) }}></i>
						<i className="fas fa-chevron-right fa-fw" style={circleMode === 2 ? { opacity: '.3' } : {}} onClick={() => { if ((circleMode + 1) < 3) setCircleMode(circleMode + 1) }}></i>
					</div>
					<p className="circleInfo">{circleMode === 0 ? "Сдано" : circleMode === 1 ? "На 5" : "На 4"}</p>
					<div className="circlePages">
						<span style={circleMode === 0 ? { background: findColor(examPercentage), transform: 'scale(1)' } : {}}></span>
						<span style={circleMode === 1 ? { background: findColor(examPercentage), transform: 'scale(1)' } : {}}></span>
						<span style={circleMode === 2 ? { background: findColor(examPercentage), transform: 'scale(1)' } : {}}></span>
					</div>
				</div>
				<h4>Экзамены</h4>
			</div>
			<div className="cardAndTitle" style = {window.innerWidth < 1000?{width:window.innerWidth - 200 + "px"}:{}}>
				<div className="circleCard">
					<svg style = {{filter:'drop-shadow(0 0 25px ' + findColor(easyExamPercentage) + ')'}}>
						<g>
							<circle cx="70" cy="70" r="70"></circle>
						</g>
						<g>
							<circle cx="70" cy="70" r="70" style={{ strokeDashoffset: (1 - easyExamPercentage) * 440 + "px", stroke:findColor(easyExamPercentage)}} strokeLinecap="round"></circle>
						</g>
					</svg>
					<h3>{easyExamPercentage * 100}%</h3>
					<p className="circleInfo">Сдано</p>
				</div>
				<h4>Зачеты</h4>
			</div>
		</div>
	)
}
