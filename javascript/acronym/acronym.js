export const parse = (str) => {
	let arr = str.split(/[\s\-]|[a-z](?=[A-Z])/)
	let res = '';
		for(let i = 0; i < arr.length; i++) {
			res += arr[i][0].toUpperCase()
		}
	return res
}