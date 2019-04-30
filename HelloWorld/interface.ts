const printLabel1 = (labelObj: { label: string }) => {
	console.log(labelObj.label)
}
let myObj1 = { size: 10, label: "Size 10 Object" }
printLabel1(myObj1)

interface LabeledValue1 {
	label: string
}
function printLabel3(labelObj: LabeledValue1) {
	console.log(labelObj.label);
}
const printLabel2 = (labelObj: LabeledValue1) => {
	console.log(labelObj.label)
}
printLabel2(myObj1)
printLabel3(myObj1)

interface SquareConfig {
	color?: string;
	width?: number;
}

const createSquare = (config: SquareConfig): { color: string; area: number } => {
	let newSquare = { color: "white", area: 100, width: 7 };
	if (config.color) {
		newSquare.color = config.color;
	}
	if (config.width) {
		newSquare.area = config.width * config.width;
	}
	return newSquare;
}
let mySquare = createSquare({ color: "black", width: 5 });
console.log(mySquare);  //{color: 'black', area: 100}

// let mySquare2 = createSquare({myColor: "blue", width: 7});
// console.log(mySquare2);

let squareOption = { mycolor: "cyan", width: 5 };
let mySquare3 = createSquare(squareOption);
console.log(mySquare3);

interface Point {
	readonly xx: number;
	readonly yy: number;
}
let p1: Point = { xx: 10, yy: 20 };
console.log(p1);
// ERROR p1.xx = 5;

let aa3: number[] = [1, 2, 3, 4]
let ro3: ReadonlyArray<number> = aa3;
// ERROR ro3[0] = 12;
// ERROR ro3.push(5);
// ERROR ro3.length = 3
// ERROR aa3 = ro3;
aa3 = ro3 as number[];


interface StringArray {
	//number type으로 접근하게되면 string타입으로 돌려준다.
	// [index: number]: string;    //when a StringArray is indexed with a number, it will return a string
	[index: string]: string; //이렇게하면 아래 에러남. myArray의 배열의 index는 number이기때문이다.
}

let myArray1: StringArray;
// myArray1 = ["Bob", "Fred",'1'];
// let myStr1: string = myArray1[0];
// console.log(myStr1);    //Bob

interface NumberDictionary {
	[indexesss: string]: number;
	leength: number;
	//error because its a string //name: string;
}
let myDic: NumberDictionary
myDic = { "morning": 1, "afternoon": 2, "evenning": 3, "leength": 5, "goo": 4, }
console.log(myDic)



//indexable Type은 타입확인용으로 사용된다.
interface IndexObject {
	[index: string]: string | number | boolean; //index가 string이면 value값이 string 이거나 number 이거나 boolean 타입이다.
	// name: string;
	// age: number;
	// isMale: true;
}
let myObj2: IndexObject
myObj2 = { "Mon": 1, "Tue": "goo", "three": false }
console.log(myObj2)




interface searchFunc {
	(source: string, subString: string): boolean;
}
let mySearch1: searchFunc;
mySearch1 = function (src: string, sub: string): boolean {
	let result = src.search(sub);
	return result > -1;
}



// interface ClockInterface {
// 	currentTime: Date;
// 	setTime(d: Date): void;
// }

// class Clock implements ClockInterface {
// 	currentTime: Date;
// 	setTime(d: Date): void {
// 		this.currentTime = d;
// 	}
// 	constructor(h: number, m: number) {
// 	}
// }

// let myClock: Clock = new Clock(3, 4);
// console.log(myClock);



interface Shape {
	color: string;
}

interface Square extends Shape {
	sideLength: number;
}

let square5 = {} as Square;
console.log(square5);
let square6 = <Square>{};
console.log(square6);
