import Months from '../Data/Months.json'

export default function wordDateDisplay(date, mode = 0) {
	if(mode == 0) return date.getDate() + " " + Months.short[date.getMonth()]
	if(mode == 1) return date.getDate() + " " + Months.full[date.getMonth()]
	if(mode == 2) return date.getDate() + " " + Months.full[date.getMonth()] + " " + date.getFullYear()
}