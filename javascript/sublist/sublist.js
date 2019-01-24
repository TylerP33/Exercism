export default class List {
	constructor(value){
		this.array = value || []
	}

	compare(list){
	 	return this.logic(this.array, list.array)
	 }

	logic(arr1, arr2){
		let secondList = JSON.stringify(arr2).replace(/[\[\]']+/g,'')
		let firstList = JSON.stringify(arr1).replace(/[\[\]']+/g,'')
		
		if (firstList === secondList){
	 		return 'EQUAL'
		} else if (firstList.includes(secondList)){
	 		return 'SUPERLIST'
		} else if ((secondList.includes(firstList))){
	 		return 'SUBLIST'
		} else{
	 		return 'UNEQUAL'
		}
	}
}