class Greeter {
	greeting: string;
	constructor(message: string) {
		this.greeting = message
	}
	greet = () => {
		return `Hello,  ${this.greeting}`;
	}
}

let greet = new Greeter("world")
console.log(greet.greet());


class Animal {
	move = (distance: number = 0) => {
		// console.log("Animal moved", distance, "m");
		console.log(`Animal moved ${distance}m.`);

	}
	size: number = 5;
}

class Dog extends Animal {
	bark = () => {
		console.log("Woof! Woof!");
	}
}

const dog = new Dog();
dog.bark();
dog.move(10);


class AnimalComplex {
	name: string
	constructor(theName: string) {
		this.name = theName
	}
	move(distance: number = 0) {
		console.log(`${this.name} moved ${distance}m.`);
	}
	// move = (distance: number = 0) => {
	// 	console.log(`${this.name} moved ${distance}m.`);
	// }
}

class Snake extends AnimalComplex {
	constructor(name: string) {
		super(name)
	}
	// move = (distance = 5)  => {
	// 	console.log("Slithering...");
	// 	super.move(distance)
	// }
	move(distance = 10) {
		console.log("Slithering...");
		super.move(distance)
	}
}

class Horse extends AnimalComplex {
	constructor(name: string) {
		super(name);
	}
	move = (distance = 45) => {
		console.log("Galloping...");
		super.move(distance)
	}
}

let sam = new Snake("Sammy the Python");
let tom: AnimalComplex = new Horse("Tommy the Palomino")
sam.move();
tom.move();


class Animal2 {
	name: string;
	constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal2 {
	constructor() { super("Rhino"); }
}

class Employee {
	name: string;
	constructor(theName: string) { this.name = theName; }
}
let anie = new Animal2("Goat");
let rhino = new Rhino();
let emp = new Employee("Worker");
anie = rhino;
anie = emp;
