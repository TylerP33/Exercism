export const score = (word) => {
	const alphabet = { 1: 'aeioulnrst', 2: 'dg', 3: 'bcmp', 4: 'fhvwy', 5: 'k', 8: 'xj', 10: 'qz' }
	let values = {}
	let test = Object.keys(alphabet).map(key => Array.from(alphabet[key], val => values[val] = Number(key)))
	let sum = 0
	for(let i = 0; i < word.length; i++){
		sum += values[word[i].toLowerCase()]
	}
	return sum
}