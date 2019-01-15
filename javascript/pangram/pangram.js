const alphabet = "abcdefghijklmnopqrstuvwxyz"
const isPangram = (str) => {
	let array = str.toUpperCase().split("").sort()
	let gather = ''
	let final;
	for(let i = 0; i < array.length; i++){
		if (array[i] !== array[i + 1] && array[i] !== " "){
			gather += array[i]
			final = "A" + gather.split("A").pop()
			console.log(final)
		}
	}

	if (str === ''){
		return false
	} else if(final.slice(0, 26) === alphabet.toUpperCase()){
		return true
	} else{
		return false
	}
}

isPangram('a x  quick movement of the enemy will jeopardize five gunboats')