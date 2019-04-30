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
