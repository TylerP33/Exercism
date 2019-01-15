export const isIsogram = (word) => {
	let regex = (/[a-zA-Z]+/g)
	let res;

	if (word.length < 1) {
		return true
	} else {
		let lettersOnly = word.toLowerCase().match(regex).join("").split("")
		for(let i = 0; i < lettersOnly.sort().length - 1; i++){
			if (lettersOnly[i] === lettersOnly[i + 1]) {
				res = false
				break
			} else{
				res = true
			}
		}
	}
	return res
}



