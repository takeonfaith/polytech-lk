export default function shortWordDisplay(word, limit = 50) {
	return word.substr(0, limit) + (word.length > limit?"...":"")
}