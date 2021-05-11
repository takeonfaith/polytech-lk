import React, {useRef, useEffect} from 'react'

export const SlideMenuItem = ({currentPage, changePage, menu, index, setPageOffset, setPageWidths}) => {
	const slideRef = useRef(null)
	useEffect(() => {
		setPageWidths(prevArr=>[...prevArr, slideRef.current.getBoundingClientRect().width])
		setPageOffset(prevArr=>[...prevArr, slideRef.current.offsetLeft-(currentPage)])
	}, [slideRef.current])
	return (
		<div className="SlideMenuItem" ref = {slideRef} id={index} key={index} onClick={changePage} style = {index == currentPage?{opacity:1, background: "var(--closeToContent_Color)", fontWeight:'bold'}:{}}>
			{menu}
		</div>
	)
}
