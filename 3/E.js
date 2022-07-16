const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8').toString().trim();

const strArray = fileContent.split('\n');

const M = parseInt(strArray[0]);
const N = parseInt(strArray[M + 1]);

const testiSetArray = [];
const vinArray = [];
const vinCountArray = [];
let max = -1;

const resultArray = [];
let result;

for (let i = 1; i <= M; i++) {
  testiSetArray.push(new Set(strArray[i].trim()));
}

for (let i = M + 2; i < strArray.length; i++) {
  const vin = strArray[i].trim();
  vinArray.push(vin);
  vinCountArray.push(0);
}

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    const vinSet = new Set(vinArray[j]);

    if (isIncludeSet(vinSet, testiSetArray[i])) {
      vinCountArray[j] += 1;
    }
  }
}

for (let i = 0; i < N; i++) {
  if (vinCountArray[i] > max) {
    max = vinCountArray[i];
  }
}

for (let i = 0; i < N; i++) {
  if (vinCountArray[i] === max) {
    resultArray.push(vinArray[i]);
  }
}

result = resultArray.join('\n');

fs.writeFileSync('output.txt', result);

function isIncludeSet(bigSet, smallSet) {
  let result = true;

  for (const item of smallSet) {
    if (!bigSet.has(item)) {
      result = false;
      break;
    }
  }

  return result;
}
