// add whatever parameters you deem necessary
function twoArrayObject(keys, vals) {
	let obj = {};
	for (let i = 0; i < keys.length; i++) {
		if (!vals[i]) {
			obj[keys[i]] = null;
		} else {
			obj[keys[i]] = vals[i];
		}
	}

	return obj;
}
