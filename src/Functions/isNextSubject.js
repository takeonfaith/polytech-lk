export default function isNextSubject(time, currentDay){
	let splitedTime = time.split(' - ')
	let normalTime = splitedTime[0].split(":")
	let secondsFromBeginning1 = normalTime[0] * 3600 + normalTime[1] * 60
	let secondsFromBeginning2 = currentDay.getHours() * 3600 + currentDay.getMinutes() * 60 + currentDay.getSeconds()
	return (secondsFromBeginning1 - secondsFromBeginning2) < 7000 && (secondsFromBeginning1 - secondsFromBeginning2) > 0
}