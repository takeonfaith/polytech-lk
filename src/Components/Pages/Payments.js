import React, {useState} from 'react'
import PaymentPlate from './Payment_Components/PaymentPlate'
import '../../Styles/Payments.css'
import ChoosePage from '../General_Components/ChoosePage'
import PaymentDormitory from '../../Data/Payments_Dormitory.json'
import ContractDorm from '../../Data/Contracts_Dormitory.json'
import PaymentsEducation from "../../Data/Payments_Education.json";
import ContractsEducation from "../../Data/Contracts_Education.json";
function Payments() {
	function stringToDate(object, mode) {
		if(mode == 1){
			Object.keys(object).map((payment, index) =>{
				object[payment].map((info)=>{
					let a = info.date
					info.date = new Date(a)
				})
			})
		}
		else if(mode == 2){
			Object.keys(object).map((payment, index) =>{
				let a = object[payment].startDate
				let b = object[payment].endDate
				object[payment].startDate = new Date(a)
				object[payment].endDate = new Date(b)
			})
		}
	}

	stringToDate(PaymentDormitory, 1)
	stringToDate(ContractDorm, 2)
	stringToDate(PaymentsEducation, 1)
	stringToDate(ContractsEducation, 2)
	const paymentsArray = [
		{
			payment: PaymentDormitory,
			contract: ContractDorm
		},
		{
			payment:PaymentsEducation,
			contract:ContractsEducation
		}
	]
	var settingsPages = ["Общежитие", "Обучение","Информация"]
	var [currentPage, setCurrentPage] = useState(0)
	var paymentContent = <div></div>

	


	function currentPageCallBackFunc(page) {
		setCurrentPage(page)
	}

	if(currentPage != 2){
		var contracts = paymentsArray[currentPage].contract
		var payments = paymentsArray[currentPage].payment
	}

	if (currentPage == 2) {
		paymentContent = 
		<div>
			<PaymentPlate currentPage = {currentPage}/>
		</div>
	}
	else{
		paymentContent = 
		<div>
			{Object.keys(contracts).map((contract, contractIndex)=>{
				return(
					<PaymentPlate 
						payments = {payments[contract]} 
						contractInfo = {contracts[contract]}
						payForWhat = {contract} 
						key = {contracts[contract].id}
						currentPage = {currentPage}
					/>
				)
			})}
		</div>	
	}
	return (
		<div className = "Payments">
			<ChoosePage settingsPages = {settingsPages} currentPage = {currentPage} currentPageCallBackFunc = {currentPageCallBackFunc}/>
			{paymentContent}
		</div>
	)
}

export default Payments
