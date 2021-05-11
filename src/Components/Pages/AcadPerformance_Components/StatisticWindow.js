import React, {useState, useEffect} from 'react'
import dotDateDisplay from '../../../Functions/dotDateDisplay'

export const StatisticWindow = ({data, currentNumberOption, openStatisticsMenu, currentSubjectClicked, setOpenStatisticsMenu}) => {
	function searchForId(objectData){
		let elData
		Object.keys(objectData).map((exam)=>{
			objectData[exam].map((el)=>{
				if(el.id == currentSubjectClicked){
					elData = el
				}
			})
		})
		return elData
	}
	const [currentSubjectInfo, setcurrentSubjectInfo] = useState(searchForId(data))
	useEffect(() => { 
		setcurrentSubjectInfo(searchForId(data))
	}, [openStatisticsMenu, currentSubjectClicked])
	function chooseGrade(grade){
		switch (grade) {
			case true:
				return "Зачет"
				break;
			case false:
				return "Незачет"
				break;
			case 5:
				return "5(Отлично)"
				break;
			case 4:
				return "4(Хорошо)"
				break;
			case 3:
				return "3(Удовлет.)"
				break;
			case 2:
				return "2(Неуд.)"
				break;
		}
	}
	return (
		<div className = "StatisticWindow" style = {openStatisticsMenu?{opacity:1, visibility:"visible", transform:'scale(1)'}:{}}>
			<div className="StatisticWindow_content">
				<div className = "titleAndClose">
					<h1>{currentSubjectInfo.name}</h1>
					<div className="closeBtn">
						<img src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_exit-256.png" alt="" onClick={()=>setOpenStatisticsMenu(false)} />
					</div>
				</div>
				<div>
					<p><b>Курс: </b>{currentSubjectInfo.course}</p>
					<p><b>Семестр: </b>{currentSubjectInfo.semestr}</p>
					<p><b>Форма аттестации: </b>{currentSubjectInfo.form}</p>
					<p><b>Дата проведения: </b>{dotDateDisplay(new Date(currentSubjectInfo.date))}</p>
					<p><b>Оценка: </b>{chooseGrade(currentSubjectInfo.grade)}</p>
					<p><b>Преподаватель: </b>{currentSubjectInfo.teacher}</p>
					<p><b>Номер ведомости: </b>{currentSubjectInfo.gradeId}</p>
				</div>
				
			</div>
			
		</div>
	)
}
