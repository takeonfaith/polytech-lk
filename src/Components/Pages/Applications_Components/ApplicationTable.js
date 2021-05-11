import React, {useState, useEffect} from 'react'
import { Hint } from '../../General_Components/Hint'
import ColumnItem from './Table_Components/ColumnItem'
import ColumnItemApp from './Table_Components/ColumtItemApp'

function ApplicationTable({applications, mobileWidth, isMobile, callBackCurrentApp, scroll}) {
	const tableColumns = ["Дата","Рег. Номер","Запрос","Статус","Струк. подразделение","Примечания"]
	const [openHint, setOpenHint] = useState(false)
	const [shiftVal, setShiftVal] = useState(0)
	const [openHintId, setOpenHintId] = useState(0)
	const [openHintObj, setOpenHintObj] = useState("request")
	var shift = 0
	function scrollPos(event) {
		shift = Math.round(event.target.scrollLeft/(mobileWidth-(165*mobileWidth/405)))
		callBackCurrentApp(shift)
		setShiftVal(shift)
	}
	useEffect(() => {
		setOpenHint(false)
	}, [scroll])
	const [hintXPos, setHintXPos] = useState(0)
	const [hintYPos, setHintYPos] = useState(0)
	return (
		<div className = "ApplicationTable">
			<div className="tableHead">
				{tableColumns.map((item, i)=><ColumnItem key = {i} columnItem = {item}/>)}
			</div>
			<Hint hintXPos = {hintXPos} hintYPos = {hintYPos} isMobile = {isMobile} text = {applications[openHintId][openHintObj]} openHint = {openHint} setOpenHint = {setOpenHint}/>
			<div className = "allApplications" onScroll = {scrollPos}>
				{applications.map((app, index)=>{
					return(
						<ColumnItemApp 
							key = {index}
							id = {index}
							date ={app.date} 
							regNumber = {app.regNumber} 
							request = {app.request}
							status = {app.status}
							statusDate = {app.statusDate}
							structSubdivision = {app.structSubdivision}
							setOpenHintId = {setOpenHintId}
							setOpenHint = {setOpenHint}
							setOpenHintObj = {setOpenHintObj}
							setHintXPos = {setHintXPos}
							setHintYPos = {setHintYPos}
							notation = {app.notation}
							shiftVal = {shiftVal}
							mobileWidth = {mobileWidth}
							isMobile = {isMobile}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default ApplicationTable
