const arr = [1, 2, 3, 5, 4, 2, 6, 4];
const new_arr = [];

arr.forEach((e) => {
  if (!new_arr.includes(e)) {
    new_arr.push(e);
  }
})

console.log(new_arr);