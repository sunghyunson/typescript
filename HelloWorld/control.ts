// if
let able: boolean = true
if (able) {
	console.log("test")
}

// switch
let value: number = 1
switch (value + 1) {
	case 1:
		console.log("1")
		break;
	case 2:
		console.log("2")
		break;
	default:
		console.log("default")
		break;
}

let sstr: any = "hi"
switch (sstr) {
	case "hi":
		console.log("hi, doitnow-man")
		break;
	case 1:
		console.log("1")
		break;
	default:
		console.log("who are you?")
		break;
}

// for
let list = ['apple', 'cola', '사이다']
for (let index in list) {
	console.log(index, list[index])
}

let obj: any = { "a": "apple", "b": "bird", "c": "crazy" }
for (let property in obj) {
	console.log(property, obj[property])
}

let iterable = "hellO"
for (const char of iterable) {
	console.log(char)
}

//while

