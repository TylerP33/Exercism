export default class Words {
	count(word) {
	let re = word.replace(/\s+/g, ' ')
	let splitWord = re.toLowerCase().trim().split(" ")
	let counts = {};

		for (var i = 0; i < splitWord.length; i++) {
  			let num = splitWord[i]
  			counts[num] = counts[num] ? counts[num] + 1 : 1;
		}
		if (Object.keys(counts).includes('constructor')) {
			counts['constructor'] = parseInt(counts['constructor'][counts['constructor'].length - 1])
			return counts
		} else{
			return counts
		}
	}
}

