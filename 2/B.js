const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8').toString();

const seq = fileContent
  .trim()
  .split(' ')
  .map((e) => parseInt(e));
const distArray = [];
let leftDist, rightDist;
let leftShopIndex = -Infinity;
let rightShopIndex = +Infinity;

for (let i = 0; i < seq.length; i++) {
  if (seq[i] === 1) {
    leftDist = i - leftShopIndex;
    distArray.push(leftDist);
  } else {
    distArray.push(0);
  }

  if (seq[i] === 2) {
    leftShopIndex = i;
  }
}

for (let i = seq.length - 1; i >= 0; i--) {
  if (seq[i] === 1) {
    rightDist = rightShopIndex - i;

    if (rightDist < distArray[i]) {
      distArray[i] = rightDist;
    }
  }

  if (seq[i] === 2) {
    rightShopIndex = i;
  }
}

const result = Math.max(...distArray);

fs.writeFileSync('output.txt', result.toString());
