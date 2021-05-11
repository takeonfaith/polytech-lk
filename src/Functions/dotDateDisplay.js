function rightDisplay(date) {
	return date.length == 1? "0" + date: date
}

export default function dotDateDisplay(date) {
	return rightDisplay(String(date.getDate())) + "." + rightDisplay(String(date.getMonth()+1)) + "." + date.getFullYear()
}