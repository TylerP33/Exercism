export default function transform(obj) {
	let transform = {}
		Object.entries(obj).forEach(function(x){
			x[1].forEach(function(y){
				transform[y.toLowerCase()] = parseInt(x[0])
			})
		})
	return transform
}
