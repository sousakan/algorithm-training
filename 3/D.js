const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8').toString().trim();

const strArray = fileContent.split('\n');
let seq, ans, bettySet;

let set = new Set();

const N = parseInt(strArray[0]);
let result;

for (let i = 1; i <= N; i++) {
  set.add(i);
}

for (let i = 1; i < strArray.length - 1; i += 2) {
  seq = strArray[i].split(' ').map((e) => parseInt(e));
  bettySet = new Set(seq);

  ans = strArray[i + 1].trim();

  if (ans === 'YES') {
    set = intersect(set, bettySet);
  } else {
    set = subtract(set, bettySet);
  }
}

result = [...set].join(' ');

fs.writeFileSync('output.txt', result);

function subtract(setA, setB) {
  for (const item of setB) {
    if (setA.has(item)) {
      setA.delete(item);
    }
  }

  return setA;
}

function intersect(setA, setB) {
  for (const item of setB) {
    if (!setA.has(item)) {
      setB.delete(item);
    }
  }
  return setB;
}
