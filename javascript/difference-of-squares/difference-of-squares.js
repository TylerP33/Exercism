export class Squares{
	constructor(num){
		this.num = num
		this.sumOfSquares = this.getSumOfSquares()
		this.squareOfSum = this.getSquaresOfSum()
		this.difference = this.squareOfSum - this.sumOfSquares 
	}

	getSumOfSquares(){
		let sum = 0;
			for(let i = 0; i <= this.num; i++){
				sum += i**2
			}
		return sum
	}

	getSquaresOfSum(){
		let sum = 0;
			for(let i = 0; i <= this.num; i++){
				sum += i**2 * i
			}
		return sum
	}
}
