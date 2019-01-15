export const Matrix = function(matrix) {
    let splitMatrix = matrix.split("\n") 
    this.rows = splitMatrix.map(row =>  row.split(" ").map( Number ))
    this.columns = this.rows.reduce((arr, row) => {
        row.forEach((n, i) => {
        console.log(arr[i])
            if (!arr[i]) arr[i] = []  // if there's no entry yet for column i, make it
            arr[i].push(n)            // push to the column
        })
        return arr
    }, []);
}

//let masterMatrix = [ 
//[ 1, 2, 3 ], 
//[ 4, 5, 6 ], 
//[ 7, 8, 9 ], 
//[ 8, 7, 6 ] 
//]
//masterMatrix[0].forEach(function(matrix, index){
//	masterMatrix.map(function(column){
//		console.log(column[index])
//	})
//})
