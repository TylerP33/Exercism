export const compute = (strand, strand2) => {
	let counter = 0 
	if (strand.length !== strand2.length) {
		throw 'left and right strands must be of equal length'
	}else {
		for(let i = 0; i < strand.length; i++){
			if (strand[i] !== strand2[i]) {
				counter++
			}
		}
	}
	return counter
}




