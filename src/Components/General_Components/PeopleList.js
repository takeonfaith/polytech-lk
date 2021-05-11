import React, {useState} from 'react'
import { GroupmatesWrapper } from './PeopleList_Components/GroupmatesWrapper'
import SearchBar from './SearchBar'
import StudentsData from '../../Data/StudentsData.json'
import { CustomSelect } from './CustomSelect'
export const PeopleList = ({data, list, setList, searchText, Chats, filterOptions}) => {
	const [peopleDisplay, setPeopleDisplay] = useState(window.innerWidth<1000?"list":"grid")
	const [showAll, setShowAll] = useState(false)
	const [currentNumberFilter, setCurrentNumberFilter] = useState(0)
	const [currentFilter, setCurrentFilter] = useState(filterOptions[currentNumberFilter].option)
	list.sort((a, b)=>{
		if(a.name > b.name) return 1
		else if(a.name < b.name) return -1
		else return 0
	})
	return (
		<div className = "PeopleList">
			<div className="groupTopSection">
				<SearchBar searchList = {data} seacrhWord = {'name'} setFunc = {setList} text = {searchText}/>
				<div className = "groupTopSection_btnsAndSelect">
					<div className="groupSize btn" style = {peopleDisplay == "list"?{color:"var(--blueColor)"}:{}} onClick={()=>setPeopleDisplay("list")}>
						<i className="fas fa-list fa-fw"></i>
					</div>
					<div className="groupSize btn" style = {peopleDisplay != "list"?{color:"var(--blueColor)"}:{}} onClick={()=>setPeopleDisplay("grid")}>
						<i className="fas fa-grip-horizontal fa-fw"></i>
					</div>
					<CustomSelect selectOptions = {filterOptions} currentOption = {currentFilter} changeOption = {setCurrentFilter} currentNumberOption = {currentNumberFilter} changeCurrentNumberOption = {setCurrentNumberFilter}/>
				</div>
			</div>
			<GroupmatesWrapper Chats = {Chats} groupList = {list} StudentsData = {StudentsData} peopleDisplay = {peopleDisplay} showAll = {showAll} currentFilter = {currentFilter}/>
		</div>
	)
}
