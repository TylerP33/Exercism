export default class List{
	constructor(values = []){
		this.values = [...values]
	}

	append(list){
		for(let i = 0; i < list.values.length; i++){
			this.values.push(list.values[i])
		}
		return this
	}

	concat(list){
		let values = this.values
		 for(let i = 0; i < list.values.length; i++){
		 	list.values[i].values.forEach(function(num){
		 		values.push(num)
		 	})
		}
		return this
	}

	filter(condition){
		let res = []
		for(let i = 0; i < this.values.length; i++){
			if (condition(this.values[i])){
				res.push(this.values[i])
			}
		}
		this.values = res;
		return this
	}

	length(){
		return this.values.length
	}

	map(){
		let res = []
		for(let i = 0; i < this.values.length; i++){
				res.push(this.values[i] + 1)
		}
		this.values = res;
		return this
	}

	foldl(func, initialValue){
		let acc = initialValue
		for(let i = 0; i < this.values.length; i++){
			acc = func(acc, this.values[i])
		}
		return acc
	}

	foldr(func, initialValue){
		let acc = initialValue
		for(let i = this.values.length - 1; i >= 0; i--){
			acc = func(acc, this.values[i])
		}
		return acc
	}

	reverse(arr){
		let res = []
		for(let i = this.values.length - 1; i >= 0; i--){
			res.push(this.values[i])
		}
		this.values = res
		return this
	}


}

// 0.25