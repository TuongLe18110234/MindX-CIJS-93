const arr = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3, 2, 2];

const count = {};
const maxCount = {value: 0, count: 0}

arr.forEach(e => {  
  if (!count[e]) {
    count[e] = 1;
  } else {
    count[e]++;
  }

  if (count[e] > maxCount.count) {
    maxCount.value = e;
    maxCount.count = count[e];
  }
})

console.log(maxCount);