import React, {useState} from 'react'

export const CurrentProject = ({data}) => {
	const [openProjectDescr, setOpenProjectDescr] = useState(false)
	return (
		<div className = "CurrentProject">
			<div className="CurrentProject__top" style = {openProjectDescr?{height:'100%'}:{}} onClick = {()=>!openProjectDescr?setOpenProjectDescr(!openProjectDescr):null}>
				<div className="studentsStarts" style = {openProjectDescr?{opacity:'0', transform:'translateY(-10px)'}:{}}>
				{data.stars !== 0?Array(data.stars).fill(<i className="fas fa-star fa-fw"></i>):"Нет звезд"}
				</div>
				<button className = "openProjectDescrBtn" onClick = {()=>setOpenProjectDescr(!openProjectDescr)}>
					<i className={!openProjectDescr?"fas fa-info-circle fa-fw":"fas fa-times fa-fw"}></i>
				</button>
				<span style = {openProjectDescr?{opacity:0, transition:.2 + "s"}:{}}>Ваш текущий проект:</span>	
				<span className="currentProjectName">
					<h3>{data.name}</h3>
				</span>
				<div className="projectDescr" style = {!openProjectDescr?{height:'0%', opacity:'0', visibility:'hidden', transform:'scale(0.7)', padding:'0', margin:'0'}:{}}>
					{data.descr}
				</div>
			</div>
			<div className="CurrentProject__bottom" style = {openProjectDescr?{height:'0%', opacity:'0', visibility:'hidden', transform:'scale(0.7)'}:{}}>
				Тематика проекта:
				<span className="projectTheme">
					<h4>
						{data.theme}
					</h4>
				</span>
			</div>
		</div>
	)
}
