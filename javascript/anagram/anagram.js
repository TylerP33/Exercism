export default class Anagram {
	constructor(subject) {
		this.subject = subject
	}

	matches(matches) {
		let match = this.subject.toUpperCase().split("").sort().join("")
		let f = []
		for(let i = 0; i < matches.length; i++){
			if (this.subject.toUpperCase() !== matches[i].toUpperCase() && match === matches[i].toUpperCase().split("").sort().join("")) {
				f.push(matches[i])
			}
		}
		return f
	}
}

// see which word is an anagram within matches	