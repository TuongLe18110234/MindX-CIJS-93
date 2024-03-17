const school = {
  name: 'MindX',
  address: 'PNL'
}

let nameLable = 'name';

console.log(school.name);
console.log(school[nameLable]);

if (school.address) {
  console.log(school.address);
} else {
  console.log('-');
}

// fase | undefined | 0  

if (1) {
  console.log('-------------------')
}
