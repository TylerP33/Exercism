export default function generate(maxMin){
	let equalProducts = [],
		largestFactors = [],
		smallestFactors = [],
		max = maxMin['maxFactor'],
		min = maxMin['minFactor'] || 0,
		palin
	

	for(let i = min; i <= max; i++){
		for(let j = min; j <= max; j++){
			let products = i * j
				if (Number([products].join("").split("").reverse().join("")) === products){
					equalProducts.push(products)
					palin = equalProducts.sort(function(a, b){return a - b})
					if (i * j === palin[0]){
						smallestFactors.push(j)
					}
					if (i * j === palin[palin.length - 1]) {
						largestFactors.push(j)
				}
			}
		}
	}

return {
    largest: {
      value: palin[palin.length - 1],
      factors: [largestFactors[largestFactors.length - 1], largestFactors[largestFactors.length - 2]]
    },
    smallest: {
      value: palin[0],
      factors: smallestFactors.length > 1 ? [smallestFactors[0], smallestFactors[1]] : [smallestFactors[0], smallestFactors[0]]
    },
  };
}
