export const encode = (str) => {
  return str.replace(/(.)\1+/g, (repeat, letter) => repeat.length + letter);
}

export const decode = (str) => {
  return str.replace(/(\d+)(\w|\s)/g, (str, count, letter) => letter.repeat(count));
}

