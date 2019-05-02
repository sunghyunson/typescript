function extendfunc<T, U>(first: T, second: U): T & U {
	let result = <T & U>{};
	for (let id in first) {
		(<any>result)[id] = (<any>first)[id]
	}
	for (let id in second) {
		if (!result.hasOwnProperty(id)) {
			(<any>result)[id] = (<any>result)[id]
		}
	}
	return result;
}

class Person {
	constructor(public name: string) { }
}
interface Loggable {
	logging(): void;
}
class ConsoleLogger implements Loggable {
	logging() {
		console.log("I am ConsoleLogger");
	}
}

var jim = extendfunc(new Person("Jim"), new ConsoleLogger());
var n = jim.name;
console.log(n);
console.log(jim);
// jim.logging();


interface Bird {
	fly();
	layEggs();
}
interface Fish {
	swim();
	layEggs();
}

function getSmallPet(): Fish | Bird {
	let fish: Fish;
	return fish;
}

let pet = getSmallPet();
console.log(typeof pet);

// pet.layEggs();
// console.log(pet.layEggs())
// ERROR pet.swim();
