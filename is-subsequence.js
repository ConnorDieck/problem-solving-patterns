// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
	let str1Idx = 0;
	let str2Idx = 0;
	if (!str1) return true;
	while (str2Idx < str2.length) {
		if (str2[str2Idx] === str1[str1Idx]) {
			str1Idx++;
		}
		if (str1Idx === str1.length) return true;
		str2Idx++;
	}
	return false;
}

// isSubsequence('hello', 'hello world');

// str1Idx = 1
// str2Idx = 1

// str1Val = 'h'
// str2Val = 'h'

/**
 * loop until iterated over str2
 *  if str1Val === str2Val, increase str1Idx
 * if reach the end of str1, return true
 * Increase str2Idx regardless
 * 
 * if reach the end of str2, return false
 */
