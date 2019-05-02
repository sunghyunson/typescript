// enum Responses {
// 	No = 0,
// 	Yes = 1,
// }

enum Responses {
	No = "No",
	Yes = "Yes",
}

function response(recipient: string, message: Responses): void {
	// ...
	console.log(recipient + " says " + message);

}
response("Princess Caroline", Responses.Yes)
// response("Princess Caroline", 1)

enum Enumeration {
	A
}
let aaa = Enumeration.A;
let nameOfA = Enumeration[aaa];
console.log(nameOfA);

