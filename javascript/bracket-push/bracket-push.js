// so.. I see that everyone is using a stack or queue.  I probably should have followed suit.
// Oh well, I just dove in and this is my ugly answer :D
export const bracketPush = (str) => {
    let key = {"(": ")", "{": "}", "[": "]"}
    let keys = Object.keys(key)
    let values= Object.values(key)
        for(let i = 0; i < keys.length; i++) {
            if (str[0] === keys[i] && str[str.length - 1] !== values[i] && str[1] !== values[i]){
                    return false
            }   else if (str[0] === values[i] || str.length % 2 !== 0){
                    return false
            }   else if (str.includes(keys[i]) && str.includes(values[i])){
                    return true
        }
    }
}