let { id, pwd = "hahah" } = { id: "dotinow_man" }
console.log(id)
console.log(pwd)

let { id: cool_guy, pwd2 = "hahaha" } = { id: "dotinow_man2" }
console.log(cool_guy)
console.log(pwd2)

function printPerson({ name = "d", country = "amc" }) {
	console.log(name);
	console.log(country)
}

// error printPerson({name: "gogo"});
printPerson({ name: "gogo" });
// error printPerson({country: "gogo"});
printPerson({ country: "korea", name: "gogo" });


var numbers = ["one", "two", "three", "four"]
let [num1, num2, num3, num4] = numbers
console.log(num1)
console.log(num2); // semi 콜론이 없으면 ERROR ?

// let [, ,num33, num44] = numbers
// console.log(num33, num44)

[num1, num2] = [num3, num4];
console.log(num1, num2)
console.log(num3, num4)


// let [first, ...second] = [1, 2, 3, 4]
// console.log(first)
// console.log(second)


function sumMatrix1(matrix: number[][]) {
	var sum = 0;
	console.log("matrix length: ", matrix.length)
	for (var i = 0; i < matrix.length; i++) {
		var currentRow = matrix[i]
		console.log("i:", i, " currentRow:" + currentRow)
		for (i = 0; i < currentRow.length; i++) {
			console.log("i:", i, " currentRow.length:" + currentRow.length)
			sum += currentRow[i]
		}
		// for (var j = 0; j < currentRow.length; j++) {
		// 	console.log("i:", i, " currentRow.length:" + currentRow.length)
		// 	sum += currentRow[j]
		// }
	}
	return sum;
}

console.log("sum:", sumMatrix1([[1, 2, 3], [5, 5, 5, 5]]));

for (var i = 0; i < 10; i++) {
	// setTimeout(function () { console.log(i); }, 100 * i)
}
/*
10
10
10
10
10
10
10
10
10
10
*/
let input = [1, 2];
let [first, second] = input;
console.log(first);     //1
console.log(second);    //2

first = input[0];
second = input[1];
console.log(first);     //1
console.log(second);    //2

[first, second] = [second, first];
console.log(first);     //2
console.log(second);    //1

const des1 = ([first, second]: [number, number]) => {
	console.log(first);
	console.log(second);
}
des1([3, 4]);


let [fffirst, ...rrest] = [1, 2, 3, 4, 5]
console.log(fffirst);
console.log(rrest);


let oob = {
	a: "foo",
	b: 12,
	c: "bar",
}
let { a, b } = oob;
console.log(a);
console.log(b);
({ a, b } = { a: "baz", b: 101 })
console.log(a);
console.log(b);



