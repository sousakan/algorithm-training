const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8').toString().trim();

const [n, ...seq] = fileContent.split(/[ \n]/).map(Number);

let CS = 0;
let MS = seq[0];

for (let i = 0; i < seq.length; i++) {
  CS += seq[i];

  if (CS > MS) {
    MS = CS;
  }

  if (CS < 0) {
    CS = 0;
  }
}

fs.writeFileSync('output.txt', MS.toString());
