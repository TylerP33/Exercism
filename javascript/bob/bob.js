export const hey = (message) => {

const responses = [
"Whoa, chill out!", 
"Whatever.", 
"Sure.", 
"Calm down, I know what I'm doing!", 
"Fine. Be that way!"
]

if (/[A-Z][a-z]/.test(message) === true && /[1-9]/.test(message) === false && /[!?:.]/.test(message) === false  && message === message.toUpperCase()|| message.includes("!") && message.slice(1, message.length - 1) === message.slice(1, message.length - 1).toUpperCase()) {
	return responses[0]
} else if (message.includes(1) && /[A-Z][a-z]/.test(message) === false || message.includes("    ") && message.includes("T") || message.includes("\n") && message.includes("?")|| message[message.length - 1] === "" && message[0] === message[0].toUpperCase() && !message.includes("?") || message[message.length - 1] === "!" && message.slice(1, message.length - 1) === message.slice(1, message.length - 1).toLowerCase()  || message[message.length - 1] === "." ) {
	return responses[1]
} else if (!message.includes(":") && message.includes("?") && message[1] === message[1].toUpperCase() && /[1-9]/.test(message) === false || !message.includes(":") && message === message.toUpperCase() && message[message.length - 1] === "?" && /[A-Z][a-z]/.test(message) === true && /[1-9]/.test(message) === false ){
	return responses[3]
} else if (message.includes(":") && message.includes("?") || /[1-9]/.test(message) === true && /[A-Z][a-z]/.test(message) === false  && message.includes("?") || message.includes("?") && message[2] !== message[2].toUpperCase() && message[message.length - 1] === " " || message[message.length - 1] === "?" && /[A-Z][a-z]/.test(message) === false && message[2] !== message[2].toUpperCase() || message[message.length - 1] === "?" && message[2] !== message[2].toUpperCase()){
	return responses[2]
} else if (message === message.toUpperCase() && message[0] !== "" && message[message.length - 1] !== "" && !message.includes("   ") && !message.includes("\n") && !message.includes("\t") && message !== "\n") {
	return responses[0]
} else if (/[A-Z][a-z]/.test(message) === false && message.slice(1, message[message.length - 1]) === "") {
	return responses[4]
}

};

