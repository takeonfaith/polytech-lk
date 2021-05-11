import React, {useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'

export const CreateApplicationPlate = ({title, id, currentOpenCreateApp, setcurrentOpenCreateApp, innerLinks}) => {
	const createAppRef = useRef()
	return (
		<div className = "CreateApplicationPlate" onClick = {()=>{if(id!==currentOpenCreateApp)setcurrentOpenCreateApp(id); else setcurrentOpenCreateApp(-1)}} style = {currentOpenCreateApp === id?{zIndex:'2', transform:'scale(.95)'}:{}}>
			<div className="outerTitle">
				<h4>{title}</h4> 
				<i className="fas fa-angle-down fa-fw"></i>
			</div>
			<div className="innerLinksWrapper" style = {currentOpenCreateApp != id?{display:"none"}:{}}>
				{innerLinks.map(({link, text}, i)=>{
					return(
						<p className = "appLink" key = {i}>
							<Link to = {link}>{text}</Link>
						</p>
					)
				})}
			</div>
		</div>
	)
}
