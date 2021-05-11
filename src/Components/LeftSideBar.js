import React from 'react'
import '../Styles/LeftSideBar.css'
import Logo_White from '../Imgs/logo_white.png'
import SearchBar from '../Components/General_Components/SearchBar'
import NavList from './LeftSideBar_Components/NavList'

function LeftSideBar(props) {
	function closeMenu(){
		if(props.swipedLeft && props.mobileMenuOpened){
			return props.MobileMenuCallBackFunc(false)
		}
		if(props.swipedRight && !props.mobileMenuOpened){
			return props.MobileMenuCallBackFunc(true)
		}
	} 
	return (
		<div className="LeftSideBar" onTouchMove = {closeMenu} style = {props.isMobile?props.mobileMenuOpened?{transform:"translateX(0%)", width:"100%"}:{transform:"translateX(-100%)", width:"20%"}:{transform:"translateX(0%)"}}>
			<div className="logo">
				<img src={Logo_White} alt="" style = {!props.darkTheme?{filter:'invert(1)'}:{}}/>
			</div>
			<SearchBar searchList = {props.defaultNav} seacrhWord = {'title'} searchMethod = {props.searchCallBackFunc} text = "Поиск по меню"/>
			<NavList 
				leftSideNav = {props.leftSideNav} 
				openedOtherPages = {props.openedOtherPages}
				mode = "sidebar"
				currentPage = {props.currentPage}
				mobileMenuOpened = {props.mobileMenuOpened}
				MobileMenuCallBackFunc = {props.MobileMenuCallBackFunc} 
				openOtherPagesCallBackFunc = {props.openOtherPagesCallBackFunc}
			/>
		</div>
	)
}

export default LeftSideBar
