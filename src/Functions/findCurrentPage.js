/*  
	17 - число смещения. Когда скролл находится на отметке 8, элемент находится на отметке 
	25, и так для всех элементов.
	180 - фиксированная высота блоков расписания и уведомлений. Во второй проверке мы смотрим, 
	входит ли блок в текущее положение скролла + 180, то есть вся проверка заключается в том, 
	что мы проверяем в интервале ли блок или нет
 */
export default function findCurrentNotif(e, setCurrentPage, setDots, shift = 17) {
	var isScrolling;
	var childElements = e.target.childNodes
	var position = []
	childElements.forEach((el) => {
		position.push(el.offsetTop)
	})
	// checking whether fully visible
	position.map((el, i) => {
		let isInInterval = e.target.scrollTop >= (el - (shift * i)) && el < (e.target.scrollTop + 180)
		if (isInInterval) setCurrentPage(i)
	})
	setDots(true)
	window.clearTimeout(isScrolling);
	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function () {
		setDots(false)
	}, 5000);
}