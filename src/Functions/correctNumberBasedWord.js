export default function correctNumberBasedWord(number, word1, word2To4, word5To9){
	return number % 10 == 1 && (number < 10 || number > 20)?word1:number % 10 >= 2 && number % 10 <= 4 && (number < 10 || number > 20)?word2To4:word5To9
}