import React, { useState, useRef } from 'react'
import shortWordDisplay from '../../Functions/shortWordDisplay'

export const CustomSelect = ({ selectOptions = [{ id: null, option: "", icon: "", linkedTo:[]}], currentOption, changeOption, currentNumberOption, changeCurrentNumberOption, iconMode = 0, shortWordRestrict = 13, multiselect = false}) => {
	const [openSelect, setOpenSelect] = useState(false)
	const selectRef = useRef(null)
	let tempArray = {}
	function recursionTree(start){
		let startPoint = start
		if(startPoint == selectOptions) tempArray[-1] = {root:null, content:selectOptions}
		startPoint.map((el, i)=>{
			if(el.linkedTo != undefined){
				tempArray[el.id] =
				{
					root:startPoint,
					content:el.linkedTo,
					title:el.option
				}
				recursionTree(el.linkedTo)
			}
		})
		return tempArray
	}
	const path = recursionTree(selectOptions)
	const [renderList, setRenderList] = useState(selectOptions)
	const [chosenPage, setChosenPage] = useState(-1)
	const [currentPage, setCurrentPage] = useState(-1)
	const [moveAnimation, setMoveAnimation] = useState('none')
	function changeOptionFunc(e) {
		if(e.target.id === "backBtn"){
			e.stopPropagation()
			setRenderList(path[currentPage]["root"])
			let index;
			Object.keys(path).map(el=>{
				let a = path[el]['root']
				let b = path[currentPage]["root"]
				if(path[el].content == b) return index = el
			})
			setCurrentPage(index)
			setMoveAnimation('fadeInLeft .2s forwards')
			setTimeout(()=>{
				setMoveAnimation('none')
			},200)
		}
		else if(renderList[renderList.findIndex((el)=>el.id == e.target.id)].linkedTo !== undefined){
			e.stopPropagation()
			setRenderList(path[e.target.id]["content"])
			setCurrentPage(e.target.id)
			setMoveAnimation('fadeInRight .2s forwards')
			setTimeout(()=>{
				setMoveAnimation('none')
			}, 200)
		}
		else{
			if(multiselect)
			{
				changeOption(prev => prev.push(e.target.innerText))
				changeCurrentNumberOption(prev => prev.push(e.target.id))
				setChosenPage(currentPage)
			}
			else
			{
				changeOption(e.target.innerText)
				changeCurrentNumberOption(e.target.id)
				setChosenPage(currentPage)
			}
		}
	}
	let picCoord = path[chosenPage].content.findIndex(el=>{
		return currentOption == el.option
	})
	let isThereIcon = path[chosenPage].content[picCoord].icon != ""
	return (
		<div className="CustomSelect" ref={selectRef} onClick={() => { setOpenSelect(!openSelect) }}>
			<div className="custom-select">
				<div className="custom-select__trigger">
					<span style={{ display: 'flex', alignItems: 'center' }}>
						{
							isThereIcon ?
								!iconMode ? <i className={path[chosenPage].content[picCoord].icon}></i> : <img src={path[chosenPage].content[picCoord].icon} /> : null
						}
						{shortWordDisplay(currentOption, isThereIcon?shortWordRestrict-3:shortWordRestrict-1)}
					</span>
					<div className="arrow" style={{ fontSize: '10px', position: 'absolute', right: '5px' }}><i style={openSelect ? { transform: 'rotate(180deg)', transition: ".2s transform" } : {}} className="fas fa-chevron-down"></i></div>
				</div>
				<div className={"custom-options " + (openSelect ? "open" : "")} >
					{currentPage != -1?
						<button id = "backBtn" onClick = {changeOptionFunc}>
							<div style = {{pointerEvents:'none'}}>
								<i className="fas fa-angle-left fa-fw"></i>
								<span style = {{animation:moveAnimation}}>{shortWordDisplay(path[currentPage].title, shortWordRestrict) }</span>
							</div>
						</button>
					:null}
					{renderList.map((el, i) => {
						return (
							<span className="custom-option" id={el.id} key = {i} onClick={changeOptionFunc} style={el.id == currentNumberOption ? { background: 'var(--purpleColor)', animation:moveAnimation} : {animation:moveAnimation}}>
								<div id = {el.id} style = {{pointerEvents:'none'}}>
									{
										renderList[i] !== undefined && renderList[i].icon !== "" ?
											!iconMode ?<i className={el.icon}></i> : <img src={el.icon} /> :null
									}
									{el.option}
								</div>
								{el.linkedTo !== undefined?<i className="fas fa-angle-right fa-fw"></i>:null}
							</span>
						)
					})}
				</div>
			</div>
		</div>
	)
}
