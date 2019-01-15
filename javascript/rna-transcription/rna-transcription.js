export const toRna = (strand) => {
	let final = []
	let splitStr = strand.split("")
	for (let i = 0; i < splitStr.length; i++){
		 if (splitStr[i] === "C"){
				final.push('G')
			} else if (splitStr[i] === 'G'){
				final.push('C')
			} else if (splitStr[i] === 'A'){
				final.push('U')
			} else if (splitStr[i] === 'T'){
				final.push('A')
			} else{
				throw 'Invalid input DNA.'
			}
		}
		return final.join("")
}

