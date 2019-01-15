export default class Triangle{

constructor(first, second, third){
	this.firstSide = first
	this.secondSide = second
	this.thirdSide = third
	this.store = []
}

kind(){
	if (this.isValid(this.firstSide, this.secondSide, this.thirdSide) === false) {
		throw new Error()
	} else {
		this.store.push(this.firstSide, this.secondSide, this.thirdSide)
		for(let i = 0; i < this.store.length; i++){
			if (this.store[i] === this.store[i + 1] && this.store[i] === this.store[i + 2]){
				return 'equilateral'
					break
			} else if (this.store[i] === this.store[i + 1] || this.store[i] === this.store[i + 2] || this.store[i + 1] === this.store[i + 2]){
				return 'isosceles'
					break
			} else{
				return 'scalene'
					break
			}
		}
	}
}

isValid(num1, num2, num3){
	let error = [num1, num2, num3]
		for (let i = 0; i < error.length; i++){
			if (error[i] <= 0){
				return false
			} else if (error[i] + error[i + 1] < error[i + 2] || error[i + 1] + error[i + 2] < error[i] || error[i] + error[i + 2] < error[i + 1]) {
				return false
			} 
		}
	}
}