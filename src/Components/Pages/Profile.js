import React from 'react'
import '../../Styles/Profile.css'
import Cards from '../Content_Components/Cards'
import ShortCutCard from '../Content_Components/ShortCutCard'
import StudentsData from '../../Data/StudentsData.json'
import PhotoAndInfo from '../Content_Components/PhotoAndInfo'
import { TodaysSchedule } from './Profile_Components/TodaysSchedule'
import { ProfileNotifications } from './Profile_Components/ProfileNotifications'
function Profile(props) {
	return (
		<div className = "Profile">
			<PhotoAndInfo StudentsData = {StudentsData} swipedDown = {props.swipedDown} />
			{/* <Cards StudentsData = {StudentsData}/> */}
			<div className = "scheduleAndNotif">
				<TodaysSchedule/>
				<ProfileNotifications/>
			</div>
			<ShortCutCard defaultNav = {props.defaultNav} shortCardConfig = {props.shortCardConfig} shortCardBg = {props.shortCardBg}/>
		</div>
	)
}

export default Profile
