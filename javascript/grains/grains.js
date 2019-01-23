import bigInt from './big-integer';
export default function Grains() {}

Grains.prototype.square = (num) => {
	return bigInt(2).pow(num -1).toString();
}

Grains.prototype.total = () => {
	return bigInt(2).pow(64).prev().toString();
}	
