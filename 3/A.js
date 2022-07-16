const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8').toString().trim();

const [strSeq1, strSeq2] = fileContent.split('\n');
const seq1 = strSeq1.split(' ').map((e) => parseInt(e));
const seq2 = strSeq2.split(' ').map((e) => parseInt(e));

const set1 = new Set(seq1);
const set2 = new Set(seq2);

let count = 0;

for (const item of set2) {
  if (set1.has(item)) {
    count += 1;
  }
}

fs.writeFileSync('output.txt', count.toString());
