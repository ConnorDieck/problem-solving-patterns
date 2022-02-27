// add whatever parameters you deem necessary
function constructNote(msg, letters) {
	if (msg.length > letters.length) return false;

	const msgCounter = freqCounter(msg);
	const letterCounter = freqCounter(letters);

	for (let key in msgCounter) {
		if (!letterCounter[key]) return false;
		if (msgCounter[key] > letterCounter[key]) return false;
	}

	return true;
}

function freqCounter(str) {
	let obj = {};
	for (let char of str) {
		if (!obj[char.toLowerCase()]) {
			obj[char.toLowerCase()] = 1;
		} else {
			obj[char.toLowerCase()]++;
		}
	}
	return obj;
}
