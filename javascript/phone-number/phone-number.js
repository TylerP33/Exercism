class PhoneNumber{

		constructor(number){
			this.phoneNumber = number.replace(/\D/ig, '')
		}

		number() {
			if (this.areaCode(this.phoneNumber) || this.digitLength(this.phoneNumber) || this.elevenDigits(this.phoneNumber)) {
				return null
			} else if(this.phoneNumber.length === 11) {
				return this.phoneNumber.slice(1, this.phoneNumber[this.phoneNumber.length])
			} else
				return this.phoneNumber
			}

		areaCode(number){
			return (this.phoneNumber.length === 10 && this.phoneNumber[0] === "1" || this.phoneNumber[0] === "0") ||
					(this.phoneNumber.length === 10 && this.phoneNumber[3] === "1" || this.phoneNumber[3] === "0")
		}

		digitLength(number){
			return (this.phoneNumber.length <= 9) || (this.phoneNumber.length === 12)
		}


		elevenDigits(number){
			return (this.phoneNumber.length === 11 && this.phoneNumber[0] !== "1") ||
					(this.phoneNumber.length === 11 && this.phoneNumber[0] === "1" && this.phoneNumber[1] === "1") ||
					(this.phoneNumber.length === 11 && this.phoneNumber[0] === "1" && this.phoneNumber[1] === "0") ||
					(this.phoneNumber.length === 11 && this.phoneNumber[0] === "1" && this.phoneNumber[4] === "1") ||
					(this.phoneNumber.length === 11 && this.phoneNumber[0] === "1" && this.phoneNumber[4] === "0")
		}


}

export default PhoneNumber





