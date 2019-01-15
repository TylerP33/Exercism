export const secretHandshake = (num) => {

let wholeNum;
if (!Number(num)) {
	throw 'Handshake must be a number'
} else {
	wholeNum = (num >>> 0).toString(2)
}

	const key = {
	1: "wink", 
	10: "double blink", 
	100: "close your eyes", 
	1000: "jump", 
	10000: ''
}

	let loopKey = Object.keys(key)
	let loopVal = Object.values(key)
	let sum = 0
	let result = []
	let sumNum = []
	let lastDisplay = []

	let tooManyVariables;

if (loopKey.includes(wholeNum)) {
	for( let i = 0; i < loopKey.length; i++){
		if (wholeNum === loopKey[i]) {
			return [loopVal[i]]
		} 
	}
} else {
	for( let i = 0; i < loopKey.length; i++){
		result.push(parseInt(loopKey[i]))
	}
	result.some(function(a, i){
		if (sum + a > wholeNum ){
			return true
		}
			sum += a
			sumNum.push(sum)
			for( let j = 0; j < sumNum.length; j++){
				lastDisplay.push(loopVal[j])
			}
			console.log(sumNum)
			let finalFinal = lastDisplay.filter (function (value, index, array) { 
    			return lastDisplay.indexOf (value) == index;
			});
		if (Math.max(...sumNum) >= 10000) {
			let reverse = finalFinal.reverse()
			reverse.shift()
			tooManyVariables = reverse
		} else if (Math.max(...sumNum) > 1000 && Math.max(...sumNum) > 1100){
			tooManyVariables = finalFinal.slice(0, 2).reverse()
		}
		else{
			tooManyVariables = finalFinal
		}
	})
	return tooManyVariables
}


}

secretHandshake(19)


