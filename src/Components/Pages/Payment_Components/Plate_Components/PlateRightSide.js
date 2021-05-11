import React from 'react'
import dotDateDisplay from '../../../../Functions/dotDateDisplay'
import WideBtn from '../../../General_Components/wideBtn'

function PlateRightSide({sum, contractInfo, currentDate, convertDate, currentPage}) {
	var rightSideContent
	
	if (currentPage != 2) {
		if (sum >= contractInfo.sum) {
			rightSideContent = 
			<div className = "paidOut">
				<span style = {{color:"var(--greenColor)", fontWeight:"bold"}}> Выплачено</span>
				<img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-256.png" alt=""/>
			</div>
		}
		else{
			rightSideContent = 
			<div style = {{width:100 + "%", height:"100%", display: "flex",flexDirection: "column"}}>
				<div className="paymentText">
					<p>
						Переплата на {dotDateDisplay(currentDate)} <span className = "debtOrOverpay">1117 руб.</span> Следующий платеж - <span className = "monthly">{contractInfo.monthly} руб.</span> - должен быть не позднее, чем 10.05.2021
					</p> 
					<br/>
					<p>К выплате до конца действия договора (до {convertDate(contractInfo.endDate, 2)} г.): 
					<span className = "restMoney"> {contractInfo.sum - sum} руб.</span>  (без учета индексации)</p>
				</div>
				<WideBtn btnText = "Оплатить через QR-код Сбербанк.онлайн" bg = "var(--purpleColor)" Class = "pay"/>
			</div>
		}
	}
	else{
		rightSideContent = <div style={{position:'relative',overflow:'hidden', borderRadius:'var(--standartBorderRadius)'}}><a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" style={{color:'#eee',fontSize:'12px',position:'absolute',top:'0px'}}>Москва</a><a href="https://yandex.ru/maps/213/moscow/house/bolshaya_semyonovskaya_ulitsa_38/Z04YcQZhTEUOQFtvfXt5cH5qZQ==/?ll=37.712714%2C55.781248&utm_medium=mapframe&utm_source=maps&z=17.85" style={{color:'#eee',fontSize:'12px',position:'absolute',top:'14px'}}>Большая Семёновская улица, 38 — Яндекс.Карты</a><iframe src="https://yandex.ru/map-widget/v1/-/CCUQyTcGWD" width="320" height="270" frameBorder="1" allowFullScreen={true} style={{position:'relative'}}></iframe></div>
	}
	return (
		<div className="paymentRightSide" style = {currentPage==2?{marginTop:0, flexDirection:'row', justifyContent:'center'}:{}}>
			{rightSideContent}
		</div>
	)
}

export default PlateRightSide
