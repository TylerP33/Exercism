// No RegEx used
// No .replace used
export class WordProblem {
	constructor(question) {
          this.question = question;
      }

	answer() {
  		let target; 
  		let problem = this.question.slice(8, this.question.length - 1).split(" ")
  		let res = []
  		let symbol = {'plus': '+', 'multiplied': '*', 'minus': '-', 'divided': '/'}

  		for(let i = 0; i < problem.length; i++){
  			if (problem[i] % 1 === 0 || symbol[problem[i]]) {
        			res.push(problem[i])
        		}
        	}

   		for(let i = 0; i < Object.keys(symbol).length; i++){
    		if (res.join(" ").includes(Object.keys(symbol)[i])){
    			Object.keys(symbol).map(function(key){
    				target = key
    				res.forEach(function(word){
    					if (word === target) {
    						word = symbol[word]
    						res[res.indexOf(target)] = word
    					}
    				})
    			})
    		}
    	}

        if (res.length >= 4) {
    		  res.splice(0, 0, '(')
    		  res.splice(4, 0, ')')
    		  return eval(res.join(" "))
    	} else if(res.length >= 2 && res.length < 4) {
    	 	  return eval(res.join(" "))
    	} else {
              throw new ArgumentError();
      }
    }
}



export class ArgumentError extends Error {}





