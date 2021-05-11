import React, {useState} from 'react'
import wordDateDisplay from '../../../Functions/wordDateDisplay'
import PlateContract from './Plate_Components/PlateContract'
import PlateLeftSide from './Plate_Components/PlateLeftSide'
import PlateRightSide from './Plate_Components/PlateRightSide'

function PaymentPlate(props) {
	
	var currentDate = new Date()
	var title
	if (props.currentPage != 2) {
		var payForWhat = props.payForWhat == "dormitory"?"Общежитие":props.payForWhat == "bachelor"?"Бакалавриат":"Магистратуру"
		var sum = 0
		for (let i = 0; i < props.payments.length; i++) {
			sum+=props.payments[i].value
		}
		title = <h2>Оплата за {payForWhat}</h2>
	}
	else{
		title = <h2>Договорной отдел</h2>
		
	}
	
	return (
		<div className = "paymentCardAndContract">
			<div className = "PaymentPlate">
				{title}
				<div className="paymentPlateContent">
					<PlateLeftSide sum = {sum} payments = {props.payments} convertDate = {wordDateDisplay} currentPage = {props.currentPage}/>
					<PlateRightSide sum = {sum} contractInfo = {props.contractInfo} currentDate = {currentDate} convertDate = {wordDateDisplay} currentPage = {props.currentPage}/>
				</div>
			</div>
			<PlateContract contractInfo = {props.contractInfo} convertDate = {wordDateDisplay} currentPage = {props.currentPage}/>
		</div>
		
	)
}

export default PaymentPlate
