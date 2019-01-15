export const convert = (num) => {

	let factors = {3: "Pling", 5: "Plang", 7: "Plong"}
	let keys = Object.keys(factors)
	let str = ''

	for(let i = 0; i < keys.length; i++) {
		if (num % keys[i] == 0){
			str += factors[keys[i]]
		} 
	}
	return str === '' ? num + '' : str
}