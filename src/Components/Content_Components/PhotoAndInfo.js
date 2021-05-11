import React from 'react'
import { ProfileInfo } from '../Pages/Profile_Components/ProfileInfo'

export default function PhotoAndInfo({StudentsData, swipedDown}) {
	return (
		<div className="photoAndInfo">
			<div style = {{display:'flex', alignItems:'center', marginBottom:'10px'}}>
				<img src={StudentsData.photo} alt=""/>
				<div>
					<div className="info">
						<h2>{StudentsData.name}</h2>
					</div>
					<div style = {window.innerWidth < 1000?{display:'none'}:{}}>
						<ProfileInfo swipedDown = {swipedDown}/>
					</div>
				</div>
			</div>
			<div style = {window.innerWidth > 1000?{display:'none'}:{}}><ProfileInfo swipedDown = {swipedDown}/></div>
			
		</div>
	)
}

