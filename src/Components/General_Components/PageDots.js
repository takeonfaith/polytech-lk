import React from 'react'

export const PageDots = ({ dotsAmount, currentDot, isVertical = false, isFilled = true, isVisible = true, minusDots = 0}) => {
	return (
		<div className="PageDots" style=
		{
			dotsAmount != undefined ? 
				isVertical ? 
					isFilled ? 
						isVisible ? 
						{ 
							flexDirection: 'column', 
							background: 'var(--almostTransparent)', 
							opacity: 1 
						} : 
						{ 
							flexDirection: 'column', 
							background: 'var(--almostTransparent)', 
							opacity: 0 
						} : 
					
					isVisible && isVertical ? 
					{ 
						opacity: 1, 
						flexDirection: 'column' 
					} : 
					{ 
						flexDirection: 'column' ,
						opacity: 0 
					} : 
				isVisible ? 
				{ 
					opacity: 1 
				} : 
				{ 
					opacity: 0 
				} : 
			{ 
				display: 'none' 
			}
		}>
			{dotsAmount == undefined ? null : dotsAmount.map((el, i) => {
				if(i < (dotsAmount.length - minusDots)){
					return <span className="pageCircle" key = {i} style={currentDot == i ? { background: 'var(--reallyBlueColor)' } : {}}></span>
				}
			})}
		</div>
	)
}
