const arr = [1, 2, 3, 4, 5]

// const total = arr.filter(item => item % 2 === 0)
// 								 .reduce((value, item) => value + item , 10)

const filter = arr.filter(item => item % 2 === 0)

const reduce = filter.reduce((value, item) => value - item, 10);

/**
 * [2, 4]
 * (10,  2) 10 * 2 = 20 --> value
 * (20, 4) 20 * 4 = 80 --> value
 * value --> reduce
 */

console.log(reduce);