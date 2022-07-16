const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8').toString().trim();

const [[n, q], arr, ...rangeArr] = fileContent
  .split('\n')
  .map((e) => e.split(' ').map((e) => parseInt(e)));
const prefArr = [0];

const resultArr = [];
let result;

arr.forEach((e, i) => prefArr.push(prefArr[i] + e));
rangeArr.forEach(([L, R]) => resultArr.push(prefArr[R] - prefArr[L - 1]));

result = resultArr.join('\n');

fs.writeFileSync('output.txt', result);
