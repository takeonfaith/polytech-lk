import React from 'react'
import Done from '../../../../Imgs/done.png'
import Question from '../../../../Imgs/question.png'
import Cross from '../../../../Imgs/cross.png'
import dotDateDisplay from '../../../../Functions/dotDateDisplay'
import shortWordDisplay from '../../../../Functions/shortWordDisplay'
import isWordsLenBigger from '../../../../Functions/isWordsLenBigger'
export default function ColumnItemApp(props) {
	function mouseCoords(event) {
		props.setHintXPos(event.pageX)
		props.setHintYPos(event.pageY)
	}

	function openHint(event) {
		mouseCoords(event)
		props.setOpenHintId(props.id); 
		props.setOpenHintObj(event.target.className);
		props.setOpenHint(true)
	}

	const statusImg = props.status == "inWork"?Question:props.status == "done"?Done:Cross	 
	return (
		<div className = "ColumnItemApp" style = {props.isMobile?props.id == props.shiftVal?{opacity:"1", minWidth:props.mobileWidth-(165*props.mobileWidth/395) + "px"}:{opacity:"0.5", borderRadius:"30px", minWidth:props.mobileWidth-(165*props.mobileWidth/395) + "px"}:{}}>
			<div className="date">{dotDateDisplay(props.date)}</div>
			<div className="regNum">{props.regNumber}</div>
			<div className="request" onClick = {(e)=>{if(isWordsLenBigger(props.request))openHint(e)}}>{shortWordDisplay(props.request)}</div>
			<div className="status" onClick = {openHint}
			>
				<img src={statusImg} alt="" style = {{pointerEvents:'none'}}/> 
				{dotDateDisplay(props.statusDate)}
			</div>
			<div 
				className="structSubdivision" 
				onClick = {(e)=>{if(isWordsLenBigger(props.structSubdivision))openHint(e)}}>
				{shortWordDisplay(props.structSubdivision)}
			</div>
			<div className="notation" onClick = {(e)=>{if(isWordsLenBigger(props.notation))openHint(e)}}>{shortWordDisplay(props.notation)}</div>
		</div>
	)
}
