const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8').toString();

const seq = fileContent.split('\n').map((e) => parseInt(e));

const dict = new Map();
let max = 0;
let result;

for (let i = 0; i < seq.length; i++) {
  if (seq[i] === 0) {
    break;
  }

  if (!dict.has(seq[i])) {
    dict.set(seq[i], 0);
  }

  const oldValue = dict.get(seq[i]);
  dict.set(seq[i], oldValue + 1);
}

for (const [key, value] of dict) {
  if (key > max) {
    max = key;
  }
}

result = dict.get(max);

fs.writeFileSync('output.txt', result.toString());
