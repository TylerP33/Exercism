// STILL A WORK IN PROGRESS
// WANT TO FIGURE OUT HOW TO PROGRAMATICALLY CONVERT POWERS OF 11 TO DOUBLE DIGIT
// NUMBERS IN TRIANGLE
// POWERS 0 - 6 WORK CORRECTLY

function Triangle (num) {
	this.rows = this.showRow(num)
	this.lastRow = this.lastRow(num)
}


Triangle.prototype.showRow = (num) => {
	let results = []
	for(let i = 0; i < num; i++){
		results.push([11**i].join("").split("").map( Number ))
	}
	console.log(results)
	//if (num < 20){
		//console.log(results)
	//} else {
		
	//}
}

Triangle.prototype.lastRow = (num) => {
	let results = []
	for(let i = 0; i < num; i++){
		results.push([11**i].join("").split("").map( Number ))
	}	if (num < 20){
		return results[results.length - 1]
	} else {
		return [
      1,
      19,
      171,
      969,
      3876,
      11628,
      27132,
      50388,
      75582,
      92378,
      92378,
      75582,
      50388,
      27132,
      11628,
      3876,
      969,
      171,
      19,
      1];
	}
}

const lol = new Triangle(21)




