module.exports = function check(str, bracketsConfig) {
	let myArray = [];
	let myStr = str;
	for(let item of bracketsConfig) {
		myArray.push(item.join(""));
	}
	for(let i = 0; i <= str.length/2; i++){
		for(let item of myArray) {
			myStr = myStr.replace(item, "");
		}
	}
	return myStr.length === 0;
}

