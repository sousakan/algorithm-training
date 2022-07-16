const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8').toString();

const [x, y, z] = fileContent
  .trim()
  .split(' ')
  .map((i) => parseInt(i));

let result = 0;

if (x > 12 || y > 12 || x === y) {
  result = 1;
}

fs.writeFileSync('output.txt', result.toString());
