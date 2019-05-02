function identity44(arg: number): number
function identity44(arg: any): any {
	return arg;
}

console.log(identity44(3))
// console.log(identity44("hello"));

function identiyGeneric<Tttee>(arg: Tttee): Tttee {
	return arg;
}
console.log(identiyGeneric(4));
console.log(identiyGeneric("good morning"));
console.log(identiyGeneric<string>("my string"));
let output = identiyGeneric<number>(33)
console.log(output);


function loggingIdentity<T>(arg: T[]): T[] {
	console.log(arg.length)
	return arg;
}
function loggingIdentity2<T>(arg: Array<T>): Array<T> {
	console.log(arg.length)
	return arg;
}
loggingIdentity([1, 2, 3, 4, 5])
loggingIdentity2([1, 2, 3, 4, 5])

interface Lengthwise {
	length: number;
}
function loggingIdentity3<T extends Lengthwise>(arg: T): T {
	console.log(arg.length)
	return arg;
}
console.log(loggingIdentity3({ length: 10, value: 3 }));

function getProperty<T, K extends keyof T>(obj: T, key: K) {
	return obj[key]
}
let xx = { a: 1, b: 2, c: 3, d: 4 }
console.log(getProperty(xx, "a"));
// ERROR getProperty(xx, "m")

