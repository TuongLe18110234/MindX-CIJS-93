const arr = [1, 2, 3, 4, 5]
const total = arr.filter(item => item % 2 === 0)
								 .reduce((value, item) => value + item , 10)

console.log(total);