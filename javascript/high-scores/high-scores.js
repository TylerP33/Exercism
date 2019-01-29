export class HighScores {
	constructor(input){
		this.scores = input
	}

	get latest(){
		return this.scores[this.scores.length - 1]
	}

	get highest(){
		return Math.max(...this.scores)
	}

	get top(){
		let result = [...this.scores]
		return result.sort(function(a, b){
				return a - b
		}).reverse().slice(0, 3)
	}

	get report(){
		if (this.latest === this.highest) {
			return `Your latest score was ${this.latest}. That's your personal best!`
		} else {
			return `Your latest score was ${this.latest}. That's ${this.highest - this.latest} short of your personal best!`
		} 
	}
}