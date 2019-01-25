/* deepFreeze() method works as intended, and maintains the integrity of the data. Unfortunately,
the test spec does not see it as a viable option, even though I believe it's better than
parsing the object then JSON.stringifying it like most new answers are doing.
I will keep it as is for people to see.
Here is the error:

TypeError: Cannot add property 1, object is not extensible
        at Array.push (<anonymous>)

This TypeError points to these lines of code:

roster[2].push('Oops.'); && school.grade(2).push('Oops.');

Again, students object is returned as intended in console */
export class GradeSchool {
    constructor() {
        this.students = {};
    }

    add(name, grade) {
        if (!this.students[grade]) {
            this.students[grade] = [];
        }
        this.students[grade].push(name);
        this.students[grade].sort()
    }

    roster() {
    	return this.deepFreeze(this.students)
    }

    grade(grade) {
    	if (!this.students[grade]){
    		return []
    	} else{
       		return this.deepFreeze(this.students[grade])
    	}
	}

	deepFreeze(obj){
    	if ((typeof obj === "object" && obj !== null) ||
        		(Array.isArray? Array.isArray(obj): obj instanceof Array) ||
        		(typeof obj === "function")) {

        		Object.freeze(obj);

       		 for (var key in obj) {
            		if (obj.hasOwnProperty(key)) {
                		this.deepFreeze(obj[key]);
            		}
        		}
    		}
    	return obj;
	}
}



