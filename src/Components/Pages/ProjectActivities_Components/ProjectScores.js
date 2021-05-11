import React from 'react'
import correctNumberBasedWord from '../../../Functions/correctNumberBasedWord'
import { ScoreItem } from './ProjectScores_Components/ScoreItem'

export const ProjectScores = ({data}) => {
	var scoreSum = 0
	Object.keys(data).map((el)=>{
		scoreSum += data[el]
	})
	return (
		<div className = "ProjectScores">
			<div className="ProjectScores_leftSide">
				<div className="titleAndScore">
					<h2>Начисление баллов</h2>
					<span style = {{color:"var(--blueColor)", fontWeight:'bold'}}>{scoreSum} {correctNumberBasedWord(scoreSum, "балл", "балла", "баллов")}</span>
				</div>
				<div className="scoreList">
					{Object.keys(data).map((el, i)=>{
						return <ScoreItem forWhat = {el} score = {data[el]} key = {i}/>
					})}
				</div>
			</div>
			<div className="ProjectScores_rightSide">
				<span style = {scoreSum > 60?{color:"var(--greenColor)"}:{color:"var(--redColor)"}}>{scoreSum > 60?"Зачтено":"Незачтено"}</span>
			</div>
		</div>
	)
}
