function mystery(...params) {
  console.log(...params)
	return params
}
let a = mystery(1, 23, 4, 'Mindx', 'PNL');

console.log(a);