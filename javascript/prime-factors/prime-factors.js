const primeFactors = (number) => {
	let factors = []
	for(let i = 2; i <= number; i++){
		if (number % i === 0){
			factors.push(i)
			number = number / i
			console.log(number)
			i = 1
		}
	}
	console.log(factors)
}

primeFactors(901255)
