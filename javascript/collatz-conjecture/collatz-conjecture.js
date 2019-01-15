export const steps = (n, counter = 0) => {
	 if (n <= 0){
	 	throw 'Only positive numbers are allowed'
	} else if (n === 1) {
		return counter
	} else if (n % 2 === 0){
		counter++
		n = n / 2
		return steps(n, counter)
	} else {
		counter++
		n = 3*n+1
		return steps(n, counter)
	}
}


