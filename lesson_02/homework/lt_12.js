let arr = [1, 2, 3, 4, 5]
arr = arr.map(item => {
  if (item % 2 === 0) {
		return item;
  }
	return item * 2;
})

/**
 * 1: 2
 * 2: 2
 * 3: 6
 * 4: 4
 * 5: 10
 * 
*/

console.log(arr);