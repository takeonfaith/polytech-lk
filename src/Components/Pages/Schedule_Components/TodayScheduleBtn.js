import React from 'react'

function TodayScheduleBtn(props) {
	return (
		<div className = "TodayScheduleBtn" onClick = {props.modeCallBackFunc}>
			Расписание на сегодня
		</div>
	)
}

export default TodayScheduleBtn
