import React, { useState, useEffect } from 'react'
import searchFunc from '../../Functions/searchFunc'

export default function SearchBar({ searchList, seacrhWord, setFunc, text, searchMethod = searchFunc }) {
	const [searchText, setSearchText] = useState("")
	let sideBarTitle = []
	let sideBarId = []
	searchList.map((el) => {
		sideBarTitle.push(el[seacrhWord].toLowerCase())
		sideBarId.push(el.id)
	})

	function searchFilter(val) {
		for (let i = 0; i < sideBarTitle[val].length; i++) {
			if (searchText.toLowerCase() == sideBarTitle[val].substr(i, searchText.length)) return true
		}
		return false
	}

	function changeSearch(event) {
		setSearchText(event.target.value)
	}

	useEffect(() => {
		if (searchText !== "") searchMethod(sideBarId.filter((el, inx) => searchFilter(inx)), searchList, setFunc)
		else searchMethod(sideBarId, searchList, setFunc)
	}, [searchText])
	var icon = searchText.length == 0 ? <i className="fas fa-search"></i> : <i className="fas fa-times" style={{ cursor: "pointer" }} onClick={() => { setSearchText("") }}></i>
	return (
		<div className="SearchBar">
			{icon}
			<input type="text" placeholder={text} value={searchText} onChange={changeSearch} />
		</div>
	)
}


