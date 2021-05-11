import React from 'react'

function ChoosePage(props) {
	function changeCurrentPage(event) {	
		props.currentPageCallBackFunc(event.target.id)
	}
	return (
		<div className = "ChoosePage">
			{props.settingsPages.map((page, index) => {
				return (
					<div 
						className = "page" 
						key = {index} 
						id = {index} 
						style = 
							{
								index == props.currentPage?
								{
									fontWeight:"bold", 
									color:"var(--textColor)", 
									background:"var(--closeToContent_Color)", 
									filter:"brightness(1)"
								}:
								{}
							} 
						onClick = {changeCurrentPage}
					>
					{page}
					</div> 
				)
			})}
		</div>
	)
}

export default ChoosePage
