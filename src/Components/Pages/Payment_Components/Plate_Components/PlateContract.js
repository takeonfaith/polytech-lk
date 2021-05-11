import React from 'react'
import WideBtn from '../../../General_Components/wideBtn'

function PlateContact(props) {
	var contactContent

	if (props.currentPage == 2) {
		contactContent = 
		<div style = {{height:100+"%",display:"flex", flexDirection:"column", justifyContent:"space-evenly"}}>
			<WideBtn btnText = "Банковские реквизиты" bg = "var(--blueColor)"/>
			<WideBtn btnText = "Бланк квитанции оплаты неустойки" bg = "var(--blueColor)"/>
			<WideBtn btnText = "Бланк квитанции оплаты обучения" bg = "var(--blueColor)"/>
			<WideBtn btnText = "Информация по оплате обучения" bg = "var(--blueColor)"/>
		</div>
	}
	else{
		const contractInfoArray = [
			{
				text:"Номер договора: ",
				info: props.contractInfo.number
			},
			{
				text:"Начало действия: ",
				info:props.convertDate(props.contractInfo.startDate, 2)
			},
			{
				text:"Заказчик: ",
				info:props.contractInfo.customer
			},
			{
				text:"Обучающийся: ",
				info:props.contractInfo.student
			},
			{
				text:"Сумма к оплате: ",
				info:props.contractInfo.sum
			},
			{
				text:"Ежемесячная плата: ",
				info:props.contractInfo.monthly
			},
		]
		contactContent = 
		<div>
			<h2>Реквизиты договора</h2>
			{contractInfoArray.map((info, i)=>{
				return(
					<p key = {i}>
						<span className = "boldText">{info.text}</span>{info.info}
					</p>
				)
			})}
			<WideBtn btnText = "Скопировать номер договора" imgUrl = "https://cdn1.iconfinder.com/data/icons/feather-2/24/copy-512.png" bg = "var(--blueColor)"  Class = "pay"/>
		</div>
	}
	return (
		<div className="contractInfo">
			{contactContent}
		</div>
	)
}

export default PlateContact
