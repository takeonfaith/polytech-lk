import React from 'react'

export default function WideBtn({imgUrl, btnText, func, bg, Class, textColor = '#fff'}) {
	return (
		<div className={"wideBtn " + Class} style = {{background:bg, color:textColor}} onClick = {func}>
			<i className={imgUrl} style = {imgUrl == null?{display:"none"}:{}}></i>
			{btnText}
		</div>
	)
}

