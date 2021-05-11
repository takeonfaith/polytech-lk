import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import searchFunc from '../../Functions/searchFunc'

export default function SearchBar({ searchList, text}) {
	const [searchText, setSearchText] = useState("")
	const [openSearchWindow, setOpenSearchWindow] = useState(false)
	const [basicList, setBasicList] = useState(
		()=>{
			let t = []
			searchList.map((el, i) => {
				el.innerLinks.map((innerEl, j)=>{
					t.push(
						{
							id: t.length,
							text:innerEl.text,
							title:el.title,
							link:innerEl.link
						}
					)
				})
			})
			return t
		}
	)
	const [displayList, setDisplayList] = useState([])
	function searchFilter(val) {
		let normalizedElement = basicList[val].text.toLowerCase().replace(/\s/g, '');
		let normalizedSearchText = searchText.toLowerCase().replace(/\s/g, '');
		for (let i = 0; i < basicList[val].text.length; i++) {
			if (normalizedElement.substr(i, searchText.length).includes(normalizedSearchText)){
				return true
			} 
		}
		return false
	}

	function changeSearch(event) {setSearchText(event.target.value)}

	var icon = searchText.length === 0 ? <i className="fas fa-chevron-down fa-fw" style = {openSearchWindow?{transform:'rotate(180deg) translateY(50%)'}:{}}></i> : <i className="fas fa-times" style={{ cursor: "pointer" }} onClick={() => { setSearchText("") }}></i>

	useEffect(() => {
		if(searchText !== "") {
			if(!openSearchWindow) setOpenSearchWindow(true)
			setDisplayList(basicList.filter((el)=>searchFilter(el.id)))
		}
		else {
			setDisplayList(basicList); 
		}
	}, [searchText])
	let titleArray = []

	//click outside to close
	const searchRef = useRef()
	useEffect(() => {
		document.addEventListener("mousedown", handleClick);
		return () => {document.removeEventListener("mousedown", handleClick);};
	 }, []);
	const handleClick = e =>{
		if (searchRef.current.contains(e.target)){
			return;
		};
		setOpenSearchWindow(false)
	}
	return (
		<div className="SearchBar" ref = {searchRef}>
			{icon}
			<input type="text" placeholder={text} value={searchText} onChange={changeSearch} style = {{width:'100%'}} onClick = {()=>{setOpenSearchWindow(!openSearchWindow)}}/>
			<div className="innerLinksWrapper" style = {!openSearchWindow?{display:'none'}:{top:'40px', width:'100%', maxHeight:'400px', overflowY:'auto', background:'var(--fullInfoMenu_Color)'}}>
				{displayList.map(({link, text, title}, i)=>{
					let isPrinted = titleArray.includes(title)
					if(!isPrinted) titleArray.push(title)
					return(
						<div key = {i}>
							<h4 style = {isPrinted?{display:'none'}:{padding:'10px 10px 2px 10px', color:'grey'}} >{title}</h4>
							<p className = "appLink" key = {i}>
								<Link to = {link}>{text}</Link>
							</p>
						</div>
					)
				})}
				{displayList.length === 0? <h3 style = {{padding:'20px'}}>По вашему запросу ничего не найдено</h3>:null}
			</div>
		</div>
	)
}


