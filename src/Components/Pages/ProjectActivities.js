import React, {useState} from 'react'
import { AboutCurator } from './ProjectActivities_Components/AboutCurator'
import '../../Styles/ProjectActivities.css'
import { CurrentProject } from './ProjectActivities_Components/CurrentProject'
import { ProjectScores } from './ProjectActivities_Components/ProjectScores'
import ProjectData from '../../Data/ProjectData.json'
import { ParticipantsList } from './ProjectActivities_Components/ParticipantsList'
import {CustomSelect} from '../General_Components/CustomSelect'
function ProjectActivities() {
	const [currentNumberSemestr, setCurrentNumberSemestr] = useState(0)
	const selectOptions = [
		{
			id:0,
			option:"3 семестр", 
			icon:''
		},
		{
			id:1,
			option:"2 семестр", 
			icon:''
		},
		{
			id:2,
			option:"1 семестр", 
			icon:''
		},
	]
	const [currentSemestr, setCurrentSemestr] = useState(selectOptions[currentNumberSemestr].option)

	return (
		<div className="ProjectActivities">
			<CustomSelect selectOptions = {selectOptions} currentOption = {currentSemestr} changeOption = {setCurrentSemestr} currentNumberOption = {currentNumberSemestr} changeCurrentNumberOption = {setCurrentNumberSemestr}/>
			<div className = "CurrentProjectAndAboutCurator">
				<CurrentProject data = {ProjectData[currentNumberSemestr]["Project"]}/>
				<AboutCurator data = {ProjectData[currentNumberSemestr]["Curator"]}/>
			</div>
			<div className="ProjectScoresAndList">
				<ProjectScores data = {ProjectData[currentNumberSemestr]['Scores']}/>
				<ParticipantsList data = {ProjectData[currentNumberSemestr]['ParticipantsList']}/>
			</div>
		</div>
	)
}

export default ProjectActivities
