export const classify = (num) => {

	if (num <= 0){
		throw new Error('Classification is only possible for natural numbers.')
	} else{
		let checker = 0;
			for(let i = 0; i < num; i++){
				if (num % i === 0){
				checker += i
			}
		}

		if (checker === num){
			return 'perfect'
		} else if (checker > num){
			return 'abundant'
		} else{
			return 'deficient'
		}
	}
}