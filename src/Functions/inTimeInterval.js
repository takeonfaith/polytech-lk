export default function inTimeInterval(interval, currentTime) {
	var startTime = "", endTime = ""

	var a = interval.split(' - ')
	startTime = a[0]
	endTime = a[1]
	var pieces = startTime.split(':')
	var startHour = pieces[0], startMinute = parseInt(pieces[1], 10);
	pieces = endTime.split(':')
	var endHour = parseInt(pieces[0], 10), endMinute = parseInt(pieces[1], 10);
	if(currentTime.getHours()*60 + currentTime.getMinutes() >= startHour * 60 + startMinute){
		if (currentTime.getHours()*60 + currentTime.getMinutes() <= endHour * 60 + endMinute) {
			return true
		}
	}
	return false
}
