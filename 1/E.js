const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8').toString();

const [d, x, y] = fileContent.split(/[ \n]/).map((i) => parseInt(i));

const cond1 = 0 <= x && x <= d;
const cond2 = 0 <= y && y <= d;
const cond3 = x + y <= d;

let result;

if (cond1 && cond2 && cond3) {
  result = 0;
} else {
  const distA = calcDist(x, y, 0, 0);
  const distB = calcDist(x, y, d, 0);
  const distC = calcDist(x, y, 0, d);

  const distArray = [distA, distB, distC];
  const minDist = Math.min(distA, distB, distC);
  result = distArray.findIndex((v) => v === minDist) + 1;
}

fs.writeFileSync('output.txt', result.toString());

function calcDist(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}
