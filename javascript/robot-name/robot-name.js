const usedNames = {}

const setName = () => {
		let name = "";
		let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		let numbers = '0123456789'
		for (let i = 0; i < 2; i++) {
			name += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
		}
		for (let i = 0; i < 3; i++) {
			name += numbers.charAt(Math.floor(Math.random() * numbers.length));
		}
		usedNames[name] ? name = setName() : usedNames[name] = true

  		return name;

	}

export default class Robot {
	constructor(){
		this.robName = setName()
	}

	get name() {
		return this.robName
	}

	reset(){
		this.robName = setName()
	}
}
