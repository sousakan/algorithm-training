const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8').toString();

const [N, i, j] = fileContent
  .trim()
  .split(' ')
  .map((i) => parseInt(i));

const diff = Math.abs(j - i);
const oneWayNumber = diff - 1;
const secondWayNumber = N - diff - 1;
const minDiff = Math.min(oneWayNumber, secondWayNumber);

fs.writeFileSync('output.txt', minDiff.toString());
