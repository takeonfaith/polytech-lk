import React from 'react'

function PlateLeftSide({sum, payments, convertDate, currentPage}) {
	var paymentLeftSideContent
	if(currentPage == 2){
		paymentLeftSideContent = 
		<div style = {{lineHeight:1.4 + "em"}}>
			<p>Адрес: ул. Б. Семеновская, 38, А-303</p>	
			<h4>Часы работы:</h4>
			<p>Пн-Чт: 9.30-18.30</p> 
			<p>Пт: 9.30-17.15</p>
			<p>Обед: 12.15-13.00</p>
			<h4>Телефоны:</h4>
			<p>+7 (495) 223-05-40 или +7 (495) 223-05-23, доб. 1549, 1562, 1563, 1564,1550,1247</p>
			<h4>E-mail:</h4>
			<p>oplata@mospolytech.ru</p>
		</div>
	}
	else{
		paymentLeftSideContent = 
		<div>
			<div className = "paymentPlateIncome">
				<h4>Поступившие платежи</h4>
				<div>{sum} руб.</div>
			</div>
			<div className="paymentsArea">
				{payments.map((payment, i) =>{
					return(
						<div className = "paymentLog" key = {i}>
							<div>{convertDate(payment.date, 2)}</div>
							<div className = "paymentValue">{payment.value} руб.</div> 
						</div>
					)
				})}
			</div>
		</div>
	}
	return (
		<div className="paymentLeftSide">
			{paymentLeftSideContent}
		</div>
	)
}

export default PlateLeftSide
