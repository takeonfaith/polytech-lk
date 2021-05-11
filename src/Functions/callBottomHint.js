export default function callBottomHint(text, func, time, bg) {
	func(text, true, bg)
	setTimeout(()=>{
		func(text, false, bg)
	}, time)
}