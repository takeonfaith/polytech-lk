import React, {useState, useEffect, useRef} from 'react'
import '../../App.css'
import { SlideTopMenu } from './SlideTopMenu'
export const PageWithSlideMenu = ({contentArray, menuArray}) => {
	const [currentMenuPage, setCurrentMenuPage] = useState(0)
	const pagesRef = useRef(null)
	const pageRef = useRef(null)
	useEffect(() => {
		pagesRef.current.scrollLeft = pageRef.current.offsetWidth * currentMenuPage
	}, [currentMenuPage])
	return (
		<div className = "PageWithSlideMenu">
			<SlideTopMenu menuArray = {menuArray} currentPage = {currentMenuPage} changePageFunc = {setCurrentMenuPage}/>
			<div className = "allPages" ref = {pagesRef} onScroll = {(e)=>{setCurrentMenuPage(Math.round(e.target.scrollLeft/pageRef.current.offsetWidth))}}>
				{menuArray.map((el, index)=>{
					return (
						<div className="page" ref = {pageRef} key = {index} style = {index != currentMenuPage?{visibility:'hidden', transition:.3 + "s"}:{}}>
							<div className = "pageContent" style = {index != currentMenuPage?{transform:'translateY(30px)', opacity:'0', transition:.3 + "s"}:{transition:.3 + "s"}}>
								{contentArray[index]}
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
