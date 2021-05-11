import React, {useState, useRef} from 'react'
import CardItem from './Cards_Components/CardItem'

function Cards({StudentsData}) {
	const [openCard, setOpenCard] = useState(false)
	const [currentCard, setCurrentCard] = useState(0)
	const cardRef = useRef(null)
	function openCardFuncCallBack(bool) {setOpenCard(bool)}
	function currentCardCallBackFunc(id) {setCurrentCard(id)}
const innerTextFirst = 
`Статус: ${StudentsData.status}	
Пол: ${StudentsData.sex}
Дата рождения: ${StudentsData.birthday}
Код студента: ${StudentsData.code}
Факультет: ${StudentsData.faculty}	
Курс: ${StudentsData.course}
Группа: ${StudentsData.group}
Специальность: ${StudentsData.specialty}
Специализация:  ${StudentsData.specialization}
Срок обучения: ${StudentsData.degreeLength}
Форма обучения: ${StudentsData.educationForm}
Вид финансирования: ${StudentsData.finance}
Уровень образования: ${StudentsData.degreeLevel}
Год набора: ${StudentsData.enterYear}`

var innerTextSecond = `Приказ № 695-с от 10 сентября 2020 г. - «Об изменении учебной группы»
Приказ № 640-с от 26 августа 2020 г. - «О переводе на следующий курс (ликвидация задолженностей)»
Приказ № 873-с от 10 сентября 2019 г. - «О распределении по учебным группам»
Приказ № 585-ОД от 3 августа 2019 г. - «О зачислении»
`
	function scrollToBottom() {
		if(!openCard)setTimeout(()=>cardRef.current.scrollIntoView({behavior:'smooth'}), 300)
	}
	return (
		<div className = "Cards" style = {openCard && currentCard === 2?{justifyContent:"flex-end"}:{}} onClick = {scrollToBottom}>
			<CardItem 
				title = "Учетная карточка" 
				innerText = {innerTextFirst} 
				id = {1} 
				currentCard = {currentCard} 
				openCard = {openCard}
				openCardFuncCallBack = {openCardFuncCallBack}
				currentCardCallBackFunc = {currentCardCallBackFunc}
			/>
			<CardItem 
				title = "Приказы" 
				innerText = {innerTextSecond} 
				id = {2} 
				currentCard = {currentCard} 
				openCard = {openCard}
				openCardFuncCallBack = {openCardFuncCallBack}
				currentCardCallBackFunc = {currentCardCallBackFunc}
			/>
			<div ref = {cardRef}></div>
		</div>
	)
}

export default Cards
