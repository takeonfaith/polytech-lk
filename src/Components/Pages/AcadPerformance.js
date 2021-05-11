import React, {useState, useEffect} from 'react'
import { EasyExamsTable } from './AcadPerformance_Components/EasyExamsTable'
import { ExamsTable } from './AcadPerformance_Components/ExamsTable'
import { ProgressCircles } from './AcadPerformance_Components/ProgressCircles'
import AcadPerformanceData from '../../Data/AcadPerformance.json'
import '../../Styles/AcadPerformance.css'
import { OptionList } from '../General_Components/OptionList'
import { CustomSelect } from '../General_Components/CustomSelect'
import { StatisticWindow } from './AcadPerformance_Components/StatisticWindow'
function AcadPerformance() {
	function strToNum(str) {
		let a = str.split(' ') 
		return (!parseInt(a[0]))?-1:parseInt(a[0])-1
	}
	let scholarship = ""
	const options = [
		{
			id:0,
			option:"1 семестр",
			icon:"",
			rightIcon:""
		},
		{
			id:1,
			option:"2 семестр",
			icon:"",
			rightIcon:""
		},
		{
			id:2,
			option:"3 семестр",
			icon:"",
			rightIcon:""
		},
		{
			id:3,
			option:"За все время",
			icon:"",
			rightIcon:""
		}
	]
	const [currentNumberOption, setCurrentNumberOption] = useState(0)
	const [currentOption, setCurrentOption] = useState(options[currentNumberOption].option)
	const [currentSubjectClicked, setCurrentSubjectClicked] = useState(0)
	const [openStatisticsMenu, setOpenStatisticsMenu] = useState(false)
	var data = {exams:[], easyExams:[]} 
	if(currentNumberOption == (options.length - 1))
	{AcadPerformanceData.forEach((el, i)=>{
		if(el.hasOwnProperty('exams')){
			el.exams.forEach((el)=>{
				data.exams.push(el)
			})
		}
		if(el.hasOwnProperty('easyExams')){
			el.easyExams.forEach((el)=>{
				data.easyExams.push(el)
			})
		}
	})}
	else data = AcadPerformanceData[currentNumberOption]
	
	if(data['exams'].some((el)=>{return el.grade < 4}) || data['easyExams'].some((el)=>{return el.grade === false})) scholarship = "К сожалению, у вас нет стипендии на " + (parseInt(currentNumberOption)+2) + " семестр"
	else {
		let count = 0
		data['exams'].map((el)=>{
			if(el.grade === 4) count++
		})
		let aP = count/data['exams'].length
		if(aP <= .5 && aP > 0) scholarship = "Стипендия на " + (parseInt(currentNumberOption)+2) + " семестр: " + 4500
		else if(aP > .5) scholarship = "Стипендия 3000"
		else scholarship = "Стипендия 7000"
	}
	return (
		<div className = "AcadPerformance">
			<CustomSelect selectOptions = {options} currentOption = {currentOption} changeOption = {setCurrentOption} currentNumberOption = {currentNumberOption} changeCurrentNumberOption = {setCurrentNumberOption}/>
			<ProgressCircles AcadPerformanceData = {data}/>
			<div className = "scholarshipPlate" style = {currentNumberOption == (options.length - 1)?{display:'none'}:{}}>
				<h5>{scholarship}</h5>
			</div>
			<ExamsTable AcadPerformanceData = {data} setCurrentSubjectClicked = {setCurrentSubjectClicked} setOpenStatisticsMenu = {setOpenStatisticsMenu}/>
			<EasyExamsTable AcadPerformanceData = {data} setCurrentSubjectClicked = {setCurrentSubjectClicked} setOpenStatisticsMenu = {setOpenStatisticsMenu}/>
			<StatisticWindow data = {data} currentNumberOption = {currentNumberOption} openStatisticsMenu = {openStatisticsMenu} currentSubjectClicked = {currentSubjectClicked} setOpenStatisticsMenu = {setOpenStatisticsMenu}/>
		</div>
	)
}

export default AcadPerformance
