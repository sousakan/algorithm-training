const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8').toString().trim();

const strArray = fileContent.split('\n');

const dict = new Map();
const pairArray = [];

let result;

for (let i = 1; i < strArray.length; i++) {
  const [d, a] = strArray[i].split(' ').map((e) => BigInt(e));

  if (!dict.has(d)) {
    dict.set(d, BigInt(0));
  }

  dict.set(d, dict.get(d) + a);
}

for (const [key, value] of dict) {
  pairArray.push([key, value]);
}

pairArray.sort((a, b) => subtractBig(a[0], b[0]));

result = pairArray.map((e) => e.join(' ')).join('\n');

fs.writeFileSync('output.txt', result);

function subtractBig(bigA, bigB) {
  const bigC = bigA - bigB;

  if (bigC > 0) {
    return 1;
  } else if (bigC < 0) {
    return -1;
  } else {
    return 0;
  }
}
