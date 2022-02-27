// add whatever parameters you deem necessary
function separatePositive(arr) {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		if (arr[left] > 0) {
			left++;
		} else if (arr[right] < 0) {
			right--;
		} else {
			let temp = arr[right];
			arr[right] = arr[left];
			arr[left] = temp;
		}
	}

	return arr;
}

// separatePositive([ 1, -1, -1, 3 ]); // [1, 3, -1, -1]
// separatePositive([ -12, 1, -1, -1, 3, 34 ])[(34, 1, 3, -1, -1, -12)]; // [34, 1, 3, -12, -1, -1]
// left = 3;
// right = 3;

// leftVal = -1;
// rightVal = 3;

/**
 * while(left <= right)
 * is leftVal positive?
 *  move left up one
 * is righVal negative?
 *  move right down by one
 * otherwise
 *  swap
 *  move left up one
 *  move right down one
 */
