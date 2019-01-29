export class Series{
	constructor(series){
		this.series = series
		this.digits = this.turnToSeries()
	}

	turnToSeries(){
		let result = []
			for(let i = 0; i < this.series.length; i++){
				result.push(Number(this.series[i]))
			}
			return result
	}

	slices(num){
		let i = 0
		let end = this.digits.length - num
		let arr = [this.digits.slice(0, num)]
		if (end < 0){
				throw new Error('Slice size is too big.')
		} else {
			while (i < end){
				i++
				arr.push(this.digits.slice(i, num + i))
			}
			return arr
		}
	}
}