// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
	const int1Counter = freqCounter(int1);
	const int2Counter = freqCounter(int2);

	// console.log("int1Counter", int1Counter);
	// console.log("int2Counter", int2Counter);

	if (int1Counter.size !== int2Counter.size) return false;

	for (let [ key, value ] of int1Counter) {
		// console.log(key);
		// console.log("!int2Counter.get(key)", !int2Counter.get(key));
		// console.log("int1Counter.get(key) !== int2Counter.get(key)", int1Counter.get(key) !== int2Counter.get(key));
		if (!int2Counter.get(key)) return false;
		if (int1Counter.get(key) !== int2Counter.get(key)) return false;
	}

	return true;
}

function freqCounter(int) {
	const str = String(int);
	let freq = new Map();
	for (let char of str) {
		if (!freq.has(char)) {
			freq.set(char, 1);
		} else {
			freq.set(char, +freq.get(char) + 1);
		}
	}
	return freq;
}
