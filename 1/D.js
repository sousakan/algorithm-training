const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8').toString().trim();

const [strN, strSeq] = fileContent.split('\n');
const N = parseInt(strN);
const seq = strSeq.split(' ').map((i) => parseInt(i));

const index = Math.floor(N / 2);
const result = seq[index];

fs.writeFileSync('output.txt', result.toString());
