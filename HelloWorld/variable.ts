function f() {
	var a = 1;

	a = 2;
	var b = g();
	a = 3;

	return b;

	function g() {
		return a;
	}
	// return function g() {
	// 	var b = a + 1;
	// 	return b;
	// }
}

// var g = f();
// console.log(g());

console.log(f());


function scope(shouldInitialize: boolean) {
	if (shouldInitialize) {
		var x = 10;
	}

	// return x;
	return 1;
}

console.log(scope(true));
console.log(scope(false));

for (var i = 0; i < 10; i++) {
	(function (i) {
		// setTimeout(function () { console.log(i); }, 100 * i);
	})(i)
}

for (let i = 0; i < 3; i++) {
	setTimeout(function () { console.log(i); }, 100 * i);
}


function forLetScope(input: boolean) {
	let a = 100;

	if (input) {
		// 'a'는 이곳에서 가능
		let b = a + 1;
		return b;
	}

	// 오류: 'b'는 여기에 존재하지 않습니다.
	// return b;
}


function theCityThatAlwaysSleeps() {
	let getCity;

	if (true) {
		let city = "Seattle";
		getCity = function () {
			return city;
		}
	}

	return getCity();
}

let city = theCityThatAlwaysSleeps();
console.log(city);



const numLivesForCat = 9;
const kitty = {
	name: "Aurora",
	numLives: numLivesForCat,
}

// error
// kitty = {
// 	name: "Danielle",
// 	numLives: numLivesForCat,
// }

kitty.name = "Rory"
kitty.numLives--;
console.log(kitty);
