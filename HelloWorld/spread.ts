let first1 = [1, 2];
let second1 = [3, 4];
let bothPlus = [0, ...first1, ...second1, 5];
console.log(bothPlus);

let defaults1 = { food: "spicy", price: "$$", ambiance: "noisy" };
let search1 = { ...defaults1, food: "rich" };
console.log(search1);

let search2 = { food: "rich", ...defaults1 };
console.log(search2);

class C {
	p = 12;
	m() {
		console.log("hi");
	}
}

let c = new C();
let clone = { ...c };
clone.p;
// error clone.m();
