import React, {useState} from 'react'
import '../../Styles/Applications.css'
import ApplicationsData from '../../Data/ApplicationsData.json'
import ApplicationTable from './Applications_Components/ApplicationTable'
import { CreateApplicationPlate } from './Applications_Components/CreateApplicationPlate'
import SearchBarWithWindow from '../General_Components/SearchBarWithWindow'
import createAppLinks from '../../Data/ApplicationLinks.json'
export default function Applications({scroll, isMobile, mobileWidth}) {
 	ApplicationsData.map((app)=>{
		app.date = new Date(app.date)
		app.statusDate = new Date(app.statusDate)
	})
	const [currentApp, setCurrentApp] = useState(0)
	function callBackCurrentApp(params) {
		setCurrentApp(params)
	}
	const [currentOpenCreateApp, setcurrentOpenCreateApp] = useState(-1)
	return (
		<div className = "Applications">
			<h2>Заполнение заявок</h2>
			<SearchBarWithWindow searchList = {createAppLinks} seacrhWord = "title" setFunc = {()=>null} text = "Поиск по заявлениям"/>
			<div className="createApplicationsWrapper">
				{createAppLinks.map((el, i)=>{
					return <CreateApplicationPlate key = {i} id = {el.id} title = {el.title} innerLinks = {el.innerLinks} currentOpenCreateApp = {currentOpenCreateApp} setcurrentOpenCreateApp = {setcurrentOpenCreateApp}/>
				})}
			</div>
			<ApplicationTable scroll = {scroll} applications = {ApplicationsData} isMobile = {isMobile} mobileWidth = {mobileWidth} callBackCurrentApp = {callBackCurrentApp}/>
			<div className="mobileAppPages" style = {!isMobile?{display:"none"}:{}}>
				{ApplicationsData.map((appData, i)=>{
					return(
						<span className = "pageCircle" key = {i} id = {i} style = {i == currentApp?{background:"var(--blueColor)"}:{transform:"scale(.6)"}}></span>
					)
				})}
			</div>
		</div>
	)
}

