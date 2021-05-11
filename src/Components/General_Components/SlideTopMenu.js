import React, { useRef, useState, useEffect } from 'react'
import { SlideMenuItem } from './SlideMenu_Components/SlideMenuItem'

export const SlideTopMenu = ({ menuArray, currentPage, changePageFunc }) => {
	const slideRef = useRef(null)
	function changePage(e) {
		changePageFunc(e.target.id)
	}
	const [pageWidths, setPageWidths] = useState([])
	const [pageOffset, setPageOffset] = useState([])
	useEffect(() => {
		slideRef.current.scrollLeft = pageOffset[currentPage]-70
	}, [currentPage])
	return (
		<div className="SlideTopMenu" ref = {slideRef}>
			{menuArray.map((menu, index) => {
				return <SlideMenuItem currentPage = {currentPage} key = {index} changePage = {changePage} menu = {menu} index = {index} setPageOffset = {setPageOffset} setPageWidths = {setPageWidths}/>
			})}

		</div>
	)
}
