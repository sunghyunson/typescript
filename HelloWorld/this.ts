// let deck = {
// 	suits: ["hearts", "spades", "diamonds", "clubs"],
// 	cards: Array(52),
// 	createCardPcik: function () {
// 		return function () {
// 			let pickedCard = Math.floor(Math.random() * 52)
// 			let pickedSuite = Math.floor(Math.random() * 4)

// 			return { suit: suits[pickedSuite], card: pickedCard % 13 };
// 		}
// 	}
// }

// let cardPicker = deck.createCardPcik();
// let pickedCard = cardPicker();

// alert("card: " + pickedCard.card + " of " + pickedCard.suit);

let deck = {
	suits: ["hearts", "spades", "diamonds", "clubs"],
	cards: Array(52),
	createCardPcik: function () {
		// 주의: 아래 줄은 이제 화살표 함수입니다. 여기에서 'this'를 캡처할 수 있습니다.
		return () => {
			let pickedCard = Math.floor(Math.random() * 52)
			let pickedSuite = Math.floor(Math.random() * 4)

			return { suit: this.suits[pickedSuite], card: pickedCard % 13 };
		}
	}
}
let cardPicker = deck.createCardPcik();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);



interface Card {
	suit: string
	card: number
}

interface Deck {
	suits: string[]
	cards: number[]
	createCardPicker(this: Deck): () => Card
}

let deck2: Deck = {
	suits: ["hearts", "spades", "diamonds", "clubs"],
	cards: Array(52),
	// 주의사항 : 이 함수는 이제 반드시 Deck 타입이어야합니다
	createCardPicker: function (this: Deck) {
		return () => {
			let pickedCard = Math.floor(Math.random() * 52)
			let pickedSuite = Math.floor(Math.random() * 4)

			return { suit: this.suits[pickedSuite], card: pickedCard % 13 };
		}
	}
}
let cardPicker2 = deck2.createCardPicker();
let pickedCard2 = cardPicker();

console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);



interface UIElement {
	addClickListener(onclick: (this: void, e: Event) => void): void;
}
class Handler {
	info: string
	onClickBad(this: Handler, e: Event) {
		// 이런, 여기서 this를 사용했어요. 이 콜백을 사용하면 충돌으로 런타임 오류가 발생합니다.
		this.info = "good";
	}
	onClickGood(this: void, e: Event) {
		// this의 타입이 void이기 때문에 여기서는 사용할 수 없습니다!
		console.log('clicked~')
	}
	onclick = (e: Event) => { this.info = "hi" }
}
let h = new Handler()
let uiElement: UIElement
// uiElement.addClickListener(h.onclick);
// uiElement.addClickListener(h.onClickBad);



let suits3 = ["hearts", "spades", "diamonds", "clubs"]
function pickCard(x: { suit: string, card: number }[]): number
function pickCard(x: number): { suit: string, card: number }
function pickCard(x: string): void
function pickCard(x): any {
	if (typeof x == "object") {
		let pickedCard = Math.floor(Math.random() * x.length)
		return pickedCard
	}
	else if (typeof x == "number") {
		let pickedSuit = Math.floor(x / 13)
		return { suit: suits3[pickedSuit], card: x % 13 }
	}
}
let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }]
let pickedCard5 = myDeck[pickCard(myDeck)]
console.log("card: " + pickedCard5.card + " suit: " + pickedCard5.suit);
let pickedCard6 = pickCard(33)
console.log("card: " + pickedCard6.card + " suit: " + pickedCard6.suit);
let pickedCard7 = pickCard("good")
// console.log("card: " + pickedCard7.card + " suit: " + pickedCard7.suit);
console.log(pickedCard7);




