const fs = require('fs');
const str = fs.readFileSync('input.txt', 'utf8').toString().trim();

let count = 0;
let isCorrect = true;
let result;

for (const char of str) {
  if (char === '(') {
    count += 1;
  } else {
    count -= 1;
  }

  if (count < 0) {
    isCorrect = false;
    break;
  }
}

if (count !== 0 && isCorrect) {
  isCorrect = false;
}

result = isCorrect ? 'YES' : 'NO';

fs.writeFileSync('output.txt', result);
