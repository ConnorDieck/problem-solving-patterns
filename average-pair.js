// add whatever parameters you deem necessary
function averagePair(arr, avg) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		if (avg === arr[left] + arr[right] / 2) {
			return true;
		} else if (avg > arr[left] + arr[right] / 2) {
			left++;
		} else {
			right--;
		}
	}

	return false;
}
