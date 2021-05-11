export default function createRandomLink(len) {
	const engLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
	var link = ""
	for (let i = 0; i < len; i++) {
		link += engLetters[Math.round(Math.random() * 25)]
	}
	return link
}