import React, {useState} from 'react'
import ScheduleDay from './ScheduleCard_Components/ScheduleDay'
import DaysOfWeekFull from '../../../Data/DaysOfWeekFull.json'
import correctNumberBasedWord from '../../../Functions/correctNumberBasedWord'
function ScheduleCard(props) {
	const [elementScrollLeft, setElementScrollLeft] = useState(100 + 500 * props.index)
	var cardDay, amountOfSubjects = props.dayArray.length
	var isToday = props.index+1 == props.currentDay.getDay()
	setTimeout(()=>props.setMode("none"), 200)
	var ScheduleCards = amountOfSubjects != 0 ?
	props.dayArray.map((subject, i)=>{
		return(
			<ScheduleDay 
				subject = {subject}
				index = {props.index}
				isToday = {isToday}
				darkTheme = {props.darkTheme}
				currentDay = {props.currentDay}
				mode = {props.mode}
				key = {i}
			/>
		)
	}): 
	<div style = {{marginTop:"35%",display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}> 
		<h2>В этот день нет пар!</h2>
		<img src="https://media.giphy.com/media/QsIgbvJpKUqpGtmEHJ/giphy.gif" alt=""/> 
		{/* https://png2.cleanpng.com/sh/7f8b7a4f1b534355efec5274a468d3eb/L0KzQYm3V8E3N6Zmh5H0aYP2gLBuTgNucZ1qkZ9taYPmf8PrTfVud5tuReV1YXPuPcXsmQQudZZ4i9NwaX7qPbfpTfVud5tuRadrNHS0RYXpWMI4apc2RqIAOUC7Q4S6UcU0OWg8UKUCOUW2RIa1kP5o/kisspng-smiley-discord-emoji-slack-text-messaging-fb-emoji-5b4d154b827bf1.0590833315317783795345.png */}
	</div>
	cardDay = DaysOfWeekFull.full[props.index]
	var isVisible = (800 + (435*props.index/3) + props.scrollLeftValue >= elementScrollLeft && props.scrollLeftValue < elementScrollLeft) || (elementScrollLeft < window.innerWidth - 500)
	var isReallyFar = elementScrollLeft - props.scrollLeftValue > 1200
	var isMobile = props.isMobile
	var mobileWidth = props.mobileWidth - 62
	return (
		<div 	className = 
				{
					isMobile? (props.discreteRangeValue == props.index + 1?"ScheduleCardAndTitle ReallyFar":"ScheduleCardAndTitle"):
					isVisible?"ScheduleCardAndTitle":
						isReallyFar?"ScheduleCardAndTitle ReallyFar": "ScheduleCardAndTitle NotChosen"
				} 
				style = {
					isMobile?
						(isToday?
						{
							transform:"translateX(" + (-props.discreteRangeValue*(mobileWidth+36))+"px)",
							scrollSnapAlign: props.mode
						}:
						{
							
							transform:"translateX(" + (-props.discreteRangeValue*(mobileWidth+36))+"px)",
						}):
					isToday?
					{
						scrollSnapAlign: props.mode
					}:
					{}
				}>
			<div className = "dayAndAmount">
				<span style = {isToday?{color:"var(--blueColor)", fontWeight:700}:{}}>{cardDay}</span>
				<span style = {{fontWeight:'400'}}>{amountOfSubjects} {correctNumberBasedWord(amountOfSubjects, "пара", "пары", "пар")}</span>
			</div>
			<div className = "ScheduleCard" style = {isMobile?{minWidth:mobileWidth, minHeight:window.innerHeight-300, height:window.innerHeight-300}:{minWidth:400}}>
				{ScheduleCards}
			</div>
			
		</div>
	)
}

export default ScheduleCard
