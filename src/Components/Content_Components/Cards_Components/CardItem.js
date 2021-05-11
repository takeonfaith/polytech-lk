import React from 'react'

export default function CardItem(props) {
	function openCardFunc() {
		props.openCardFuncCallBack(!props.openCard)
		if (!props.openCard) props.currentCardCallBackFunc(props.id)
		else props.currentCardCallBackFunc(0)
	}
	var text, textRange = window.innerHeight > 400? window.innerHeight > 800 || window.innerWidth > 1000?80:window.innerHeight > 600?0:0: 0
	if (props.openCard) text = props.innerText
	else text = props.innerText.substr(0, textRange)

	return (
		<div className="CardItem" style=
			{
				props.openCard ?
					props.id !== props.currentCard ?
						{
							padding: 0,
							width: 0,
							height: 0,
							opacity: 0,
							transform: "scale(0)",
							borderRadius: "100px",
							margin: 0
						} :
						{
							width: "100%",
							height: "450px",
							cursor: 'default'
						} :
						window.innerWidth < 1000?{height:window.innerHeight-window.innerHeight/1.15}:{height:200}
			} onClick={!props.openCard ? openCardFunc : () => { }}>
			<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<h4>{props.title}</h4>
				<div className="cardCloseBtn" onClick={openCardFunc}>
					<i className={props.openCard?"fas fa-times fa-fw":"fas fa-angle-down fa-fw"}></i>
				</div>
			</div>
			<textarea readOnly className="innerText" value={text} style={props.openCard ? { animation: "fadeIn .5s forwards" } : { animation: "fadeOut .7s forwards" }}></textarea>
		</div>
	)
}

