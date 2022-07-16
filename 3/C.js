const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8').toString().trim();

const seq = fileContent.split(' ').map((e) => parseInt(e));
const dict = new Map();
const resultArray = [];
let result;

for (let i = 0; i < seq.length; i++) {
  if (!dict.has(seq[i])) {
    dict.set(seq[i], 0);
  }

  dict.set(seq[i], dict.get(seq[i]) + 1);
}

for (const [key, value] of dict) {
  if (value === 1) {
    resultArray.push(key);
  }
}

result = resultArray.join(' ');

fs.writeFileSync('output.txt', result);
