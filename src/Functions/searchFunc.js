export default function searchFunc(array, basicList, setFunc) {
	if (array.length < basicList.length) { setFunc(basicList.filter((el) => array.includes(el.id))) }
	else { setFunc(basicList) }
 }