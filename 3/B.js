const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8').toString().trim();

const seq = fileContent.split(' ').map((e) => parseInt(e));

const set = new Set();

const resultArray = [];
let result;

for (let i = 0; i < seq.length; i++) {
  if (set.has(seq[i])) {
    resultArray.push('YES');
  } else {
    resultArray.push('NO');
    set.add(seq[i]);
  }
}

result = resultArray.join('\n');

fs.writeFileSync('output.txt', result);
