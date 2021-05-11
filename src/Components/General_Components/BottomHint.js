import React from 'react'

export const BottomHint = ({bottomHint}) => {
	return (
		<div className = "BottomHint" style = {bottomHint.show?{background:bottomHint.bg,opacity:1, transform:'translate(-50%, -50px)', visibility: 'visible', boxShadow:"var(--mildShadow)"}:{}}>
			{bottomHint.text}
		</div>
	)
}
