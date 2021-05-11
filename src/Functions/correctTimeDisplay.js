export default function correctTimeDisplay(hour, minute){
	hour = hour.toString().length == 1? "0" + hour.toString(): hour
	minute = minute.toString().length == 1? "0" + minute.toString():minute
	return `${hour}:${minute}`
}