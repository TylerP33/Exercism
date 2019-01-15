// needs major refactoring!
// quick code under 30 minutes - current solution is too brute force

class Beer {

	verse(num){
		if (num > 2 && num <= 99){
			return `${num} bottles of beer on the wall, ${num} bottles of beer.\n`
 			+ `Take one down and pass it around, ${num - 1} bottles of beer on the wall.\n`
		} else if (num === 1){
			return `${num} bottle of beer on the wall, ${num} bottle of beer.\n`
			+ `Take it down and pass it around, no more bottles of beer on the wall.\n`
		} else if (num === 0){
			return `No more bottles of beer on the wall, no more bottles of beer.\n`
			+ `Go to the store and buy some more, 99 bottles of beer on the wall.\n`	
		}
	}
	
	sing(num1 = 99, num2 = 0) {
		let string = ''
		for (let i = num1; i >= num2; i--){
			if (i > 2) {
		string += `${i} bottles of beer on the wall, ${i} bottles of beer.\n`
				  + `Take one down and pass it around, ${i - 1} bottles of beer on the wall.\n\n`
			} else if (i === 2) {
		string += `${i} bottles of beer on the wall, ${i} bottles of beer.\n`
				  + `Take one down and pass it around, ${i - 1} bottle of beer on the wall.\n\n`
			} else if (i === 1){
		string += `${i} bottle of beer on the wall, ${i} bottle of beer.\n`
				  + `Take it down and pass it around, no more bottles of beer on the wall.\n\n`
			} else{
		string += `No more bottles of beer on the wall, no more bottles of beer.\n`
				  + `Go to the store and buy some more, 99 bottles of beer on the wall.\n\n`
			}
		}
	return string.slice(0, string.length - 1)
	}
}

export default new Beer();
