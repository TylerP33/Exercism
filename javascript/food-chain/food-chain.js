export default function Song() {}

let lastLine = "I don't know why she swallowed the fly. Perhaps she'll die.\n"
let animal = {1: 'fly', 2: 'spider', 3: 'bird', 4: 'cat',5: 'dog',6: 'goat',7: 'cow',8: 'horse'}
let specialPhrases = {
	2: 'It wriggled and jiggled and tickled inside her.\n',
	3: 'How absurd to swallow a bird!\n',
	4: 'Imagine that, to swallow a cat!\n',
	5: 'What a hog, to swallow a dog!\n',
	6: 'Just opened her throat and swallowed a goat!\n',
	7: "I don't know how she swallowed a cow!\n",
	8: "She's dead, of course!\n"
}

Song.prototype.verse = (line) => {
	if (line === 1 || line === 8){
		return repeat(line)
	} else{
		return repeat(line).join("")
	}
}

Song.prototype.verses = (line, line2, firstLine) => {
let str = []

	for (let i = 1; i < line2; i++){
		str.push(repeat(i) + "\n")
	}

	if (line2 === 8) {
		return str.join("").split(/,(.+)/).join("") + "I know an old lady who swallowed a horse.\n" + specialPhrases[line2] + "\n"
	} else{
		if (line === 1){
			return repeat(line) + "\n" + repeat(line2).join("") + "\n"
		} else{
			return repeat(line).join("") + "\n" + repeat(line2).join("") + "\n"
		}
	}
}


const format = (rep, firstLine, line) => {
	if (line){
		rep.shift()
		rep.reverse()
		rep[rep.length - 2] = `She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n`
		rep.unshift(specialPhrases[line])
		rep.unshift(firstLine)
		rep.push(lastLine)
		return rep
	}
}


const repeat = (line) => {
	let firstLine = `I know an old lady who swallowed a ${animal[line]}.\n`
	let counter = 0
	let rep = []

	if (line === 1){
			return firstLine + lastLine
	} else if (line === 8){
			return firstLine + specialPhrases[line]
	} else{
			while (counter < line){
			counter++
			rep.push(`She swallowed the ${animal[counter]} to catch the ${animal[counter - 1]}.\n`)
		}
	}
	return format(rep, firstLine, line)
}




// try copyWithin to switch statements

