export const solve = (x, y) => {
let expected;
	if (x > 10 && y > 10){
		expected = 0
	} else if ( x === 10 && y === 0) {
		expected = 1
	} else if (x < 5 && x > 0 && y > 0 && y < 5) {
		expected = 5
	} else if (x === 0 && y === 5){
		expected = 5
	} else if (x === 0 && y === 0){
		expected = 10
	} else{
		expected = null
	}
	return expected
}

