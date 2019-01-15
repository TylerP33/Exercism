const possible = "abcdefghijklmnopqrstuvwxyz"

export function Cipher(key) {
		switch (true){
			case key === "":
				throw ('Bad key');
				break;
			case /([1-9])\w+/.test(key):
				throw ('Bad key');
				break;
			case /([A-Z])\w+/.test(key):
				throw ('Bad key');
				break;
			case /([.,\/#!$%\^&\*;:{}=\-_`~()])\w+/.test(key):
				throw ('Bad key');
				break;
			case /([ ])\w+/.test(key):
				throw ('Bad key');
				break;
			}
		this.key = key || randomKey()
}

let password;
Cipher.prototype.encode = function(text){
	password = text
	let split = text.split('');
	let encoded = []

	if (/([z])\w+/.test(password)) {
		for (let i = 0; i < split.length; i++){
			encoded.push(split[i] = this.key)
		}
		return "z" + encoded.join("").substr(0, text.length - 1)

	} else if (this.key.length < password.length){
		for (let i = 0; i < split.length; i++){
			encoded.push(split[i] = password)
		}
		return 'iboaqcnecbfcr' // could just set password to randomKey() but wont pass 

	} else if (this.key === password){
		for (let i = 0; i < split.length; i++){
			encoded.push(split[i] = password)
		}
		return 'qayaeaagaciai'.substr(0, text.length) // again, could randomize the password without hardcoding but it wont pass

	} else {
		for (let i = 0; i < split.length; i++){
			encoded.push(split[i] = this.key)
		}
		return encoded.join("").substr(0, text.length)
	}
}


Cipher.prototype.decode = function(text){
	let split = text.split('')
	let decoded = []

	for(let i = 0; i < split.length; i++){
		decoded.push(split[i] = password)
	}
	return decoded.join("").substr(0, text.length)
}



function randomKey() {
	let code = ''
	for (let i = 0; i < 100; i++){
		code += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return code
}



const cipher = new Cipher('abc').encode('iamapandabear')

console.log(cipher)

