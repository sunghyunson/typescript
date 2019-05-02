console.log('hello')
console.log('good moreing')

var string = 'string';
let myStr = "kkk"
var number = 1
let num;

console.log(typeof string)
console.log(typeof myStr)
console.log(typeof number)
console.log(typeof num)

var str: string = "test"
var dec: number = 1
var bool: boolean = true

enum weekday { Mon, Tue, Wed, Thu = 4 }
var day: weekday = weekday.Mon
console.log("type of enum : ", typeof day)
console.log("enum Thu : ", weekday.Thu)
console.log("enum Thu : ", weekday["Thu"])

type EventType = "keyup" | "mouseover"
let event_name: EventType = "keyup"

// union type
var x: string | number = 1;
x = "2"

//intersection
interface CatH { leg: number }
interface Bird { wing: number }
let catbird: CatH & Bird = { leg: 4, wing: 2 }

// void type
function test(): void {
	console.log('good morning')
}
let unusable: void = undefined

// undefined type
let idontknow_val: undefined = undefined

// null type
let person: any = { name: "happy" }
person = null

//any type
let any_type: any = "dksgkgs"
any_type = 1
any_type = {};

/** object type */
// Array type
let arr_items: number[] = [1, 2, 3]
let aa_items: string[] = ["1", "2", "3"]

// generic Array type
let genArrayA: Array<number | string> = [1, 2, 3, 4, "5", "6"]
console.log(genArrayA)

// Tuple type
let iip: [number, string] = [1, "33"]


/** internal object type */
// String
let gstring = new String("test")
console.log(gstring.valueOf())

let gnumber = new Number(1);
console.log(gnumber.valueOf())

let gbool = new Boolean(true);
console.log(gbool.valueOf())
