import React, {useState} from 'react'
import { PageWithSlideMenu } from '../../General_Components/PageWithSlideMenu'
import StudentsData from '../../../Data/StudentsData.json'
export const ProfileInfo = ({swipedDown}) => {
	const [openProfileInfo, setOpenProfileInfo] = useState(false)
	const pages = ["Учетная карточка", "Приказы"]
	const content = [
		<div style = {{fontWeight:500, lineHeight:'1.35em', overflowY:'scroll', height:'100%'}}>
			<p><b>Статус:</b> {StudentsData.status}</p>
			<p><b>Пол: </b>{StudentsData.sex}</p>
			<p><b>Дата рождения:</b> {StudentsData.birthday}</p>
			<p><b>Код студента: </b>{StudentsData.code}</p>
			<p><b>Факультет:</b> {StudentsData.faculty}</p>
			<p><b>Курс:</b> {StudentsData.course}</p>
			<p><b>Группа:</b> {StudentsData.group}</p>
			<p><b>Специальность:</b> {StudentsData.specialty}</p>
			<p><b>Специализация: </b> {StudentsData.specialization}</p>
			<p><b>Срок обучения: </b> {StudentsData.degreeLength}</p>
			<p><b>Форма обучения: </b> {StudentsData.educationForm}</p>
			<p><b>Вид финансирования: </b> {StudentsData.finance}</p>
			<p><b>Уровень образования:</b> {StudentsData.degreeLevel}</p>
			<p><b>Год набора:</b> {StudentsData.enterYear}</p>
		</div>,
		<div style = {{lineHeight:'1.35em'}} className = "secondPageInfoContent">
			<p>Приказ № 695-с от 10 сентября 2020 г. - «Об изменении учебной группы»</p> 
			<p>Приказ № 640-с от 26 августа 2020 г. - «О переводе на следующий курс (ликвидация задолженностей)»</p>
			<p>Приказ № 873-с от 10 сентября 2019 г. - «О распределении по учебным группам»</p>
			<p>Приказ № 585-ОД от 3 августа 2019 г. - «О зачислении»</p>
		</div>
	]
	
	function handleFullInfo(){
		setOpenProfileInfo(!openProfileInfo)
	}
	return (
		<div className = "ProfileInfo">
			<div className="shortInfo">
				<p>Статус: {StudentsData.status}</p>	
				<p>Курс: {StudentsData.course}</p> 
				<p>Дата рождения: {StudentsData.birthday}</p> 
			</div>
			<div className="moreInfoBtn" onClick = {handleFullInfo}>
				<i className="fas fa-info-circle" style = {{marginRight:'5px'}}></i>
				Подробная информация
			</div>
			<div className="fullInfoWrapper" onClick = {handleFullInfo} style = {openProfileInfo?{}:{transform:'translateY(-50%)', opacity:0,  height:'90%', borderRadius:'100px', visibility:'hidden'}}>
				<div className = "fullInfo" onClick = {(e)=>e.stopPropagation()} style = {openProfileInfo?{}:{transform:'translate(-50%, 100%)', opacity:0,  height:'90%'}}>
					<div className = "titleAndCloseInfo" style = {{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
						<h1>Информация</h1>
						<i className="fas fa-times" style = {{fontSize:"20px", marginRight:"10px"}} onClick = {handleFullInfo}></i>
					</div>
					<PageWithSlideMenu menuArray = {pages} contentArray = {content}/>
				</div>
			</div>
		</div>
	)
}
