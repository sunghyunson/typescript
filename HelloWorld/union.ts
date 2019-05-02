function padLeft(value: string, padding: any) {
	if (typeof padding === "number") {
		return Array(padding + 1).join(" ") + value;
	}
	if (typeof padding === "string") {
		return padding + value;
	}
	throw new Error(`Expected string or number, ot '${padding}'.`);
}

// let indentedString = padLeft("Hello world", true);
let indentedString = padLeft("Hello world", 4);
let indentedString2 = padLeft("Hello world", "----=----");
console.log(indentedString);
console.log(indentedString2);
