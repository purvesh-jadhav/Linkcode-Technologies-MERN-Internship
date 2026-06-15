const arr =[1,2,3,4,5];

const mul = arr
  .map(val => val * 3)
  .filter(val => val % 2 !== 0)
  .reduce((total, val) => total * val, 1);

console.log(mul); // 405
