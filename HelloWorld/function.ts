let y1 = (xxxx: number) => { return xxxx; };
console.log(y1(12));

type funcType = (x: number) => number;
let typfunc: funcType = (x: number) => { return x; };
console.log(typfunc(100))

let iif = ((x: number) => { return x })(3)
console.log(iif);

type callBackType = (message: string) => void

let crazy: callBackType = message => {
	return "crazy!!!"
}

let sad: callBackType = message => {
	return "sad ㅠ,ㅠ";
}

// function callfunc(message: string, callback) {
// 	return "I am " + callback(message)
// }

// async function slowfunc() {
// 	await (() => {
// 		let sum = 0;for (let i = 0; i < 100000; i++) {
// 			sum += i;
// 		}
// 	})();

// 	console.log("I am lazy")
// }

// slowfunc()

// let result1 = callfunc("hello" , crazy)
// console.log(result1)

// let result2 = callfunc("good morning", sad)
// console.log(result2)


function add(x: number, y: number): number {
	return x + y;
}

let myAdd = function (x: any, y: any) { return x + y; }

let z = 100;
function addToZ(x: number, y: number) {
	return x + y + z;
}
console.log(addToZ(3, 4));

let myAdd2: (baseValue: number, stringValue: string) => string = function (x: number, y: string): string { return x + y; };
console.log(myAdd2(3, '4'));

let myAdd3: (baseValue: number, stringValue: string) => string = (x: number, y: string): string => { return x + y; };
console.log(myAdd3(3, '4'));



function buildName1(firstName: string, lastName: string) {
	return firstName + " " + lastName;
}

function buildName2(firstName: string, lastName?: string) {
	return firstName + " " + lastName;
}

function buildName3(firstName: string, lastName: string = "Smith") {
	return firstName + " " + lastName;
}
console.log(buildName3("Sam", undefined));

function buildName4(firstName: string = "Sam", lastName: string) {
	return firstName + " " + lastName;
}
console.log(buildName4(undefined, "Smiths"));

function buildName5(firstName: string, ...restName: string[]) {
	return firstName + " " + restName.join(" ");
}
console.log(buildName5("Sam", "saint", "JR.", "buffalo"));


