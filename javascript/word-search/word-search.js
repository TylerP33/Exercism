function rev(word){
	let res = []
		for (let i = word.length - 1; i >= 0; i--){
			res.push(word[i])
		}
	return res.join("")
}


function findHorizontalAllDirections(word, grid){
let result = {}


	for(let i = 0; i < grid.length; i++){
		for(let j = 0; j < word.length; j++){

			if (grid[i].includes(word[j])){
				let row = grid.indexOf(grid[i]) + 1
				let firstLetter = grid[i].indexOf(word[j][0]) + 1
				let lastLetter = grid[i].lastIndexOf(word[j].split("")[word[j].split("").length - 1]) + 1
					result[word[j]] = {
						start: [row, firstLetter],
						end: [row, lastLetter]
				}
			} else if (grid[i].includes(rev(word[j]))) {
				let row = grid.indexOf(grid[i]) + 1
				let firstLetter = grid[i].indexOf(word[j][0]) + 1
				let lastLetter = grid[i].lastIndexOf(word[j].split("")[word[j].split("").length]) + 2
					result[word[j]] = {
						start: [row, firstLetter],
						end: [row, lastLetter]
				}
			}
		}
	}
	return result
}


export default class Word {
	constructor(grid){
		this.grid = grid
	}

	find(word){
		return findHorizontalAllDirections(word, this.grid) 
	}
}


//class WordSearch {  	
//	constructor(grid) {
//		this.grid = grid
//	}