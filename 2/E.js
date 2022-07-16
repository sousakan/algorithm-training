const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8').toString().trim();

const [N, ...seq] = fileContent.split(/[ \n]/).map((e) => parseInt(e));

seq.sort((a, b) => a - b);
let sum = 0;

for (let i = 0; i < N - 1; i++) {
  sum += seq[i];
}

fs.writeFileSync('output.txt', sum.toString());
