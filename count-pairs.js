// add whatever parameters you deem necessary
function countPairs(arr, int) {
	arr = arr.sort((a, b) => a - b);
	let left = 0;
	let right = arr.length - 1;

	let sum = 0;
	let numPairs = 0;

	while (left < right) {
		sum = arr[left] + arr[right];
		if (sum === int) {
			numPairs++;
			left++;
			right--;
		} else if (sum > int) {
			right--;
		} else {
			left++;
		}
	}

	return numPairs;
}

// countPairs([ 4, 6, 2, 7 ], 10);
// int = (10)[(2, 4, 6, 7)];

// countPairs([ 3, 1, 5, 4, 2 ], 6)[(1, 2, 3, 4, 5)];

// left = 2;
// right = 2;
// leftVal = 02;
// rightVal = 4;

/**
 * Sort array
 * if right value > int && left value >= 0, return 0 (numPairs)
 * if left value < int $$ right value <= 0, return 0
 * 
 * add right and left values
 *  if sum === int,
 *      add 1 to numPairs 
 *      decrement right and increment left
 *  else if sum > int
 *      decrement right
 *  otherwise
 *      increment left
 */
