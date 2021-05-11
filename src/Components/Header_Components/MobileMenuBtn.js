import React from 'react'

function MobileMenuBtn(props) {
	function openMenu() {
		props.MobileMenuCallBackFunc(!props.mobileMenuOpened)
	}

	var menuBtn = props.mobileMenuOpened?<i className="fas fa-times fa-fw"></i>:<i className="fas fa-bars fa-fw"></i>
	return (
		<div className = "MobileMenuBtn" onClick = {openMenu}>
			{menuBtn}
		</div>
	)
}

export default MobileMenuBtn
