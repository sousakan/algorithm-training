const fs = require('fs');
const str = fs.readFileSync('input.txt', 'utf8').toString().trim();

let count = 0;
const N = str.length;
const bound = Math.floor(N / 2);
let k = Math.floor(N / 2) - 1;
let m = N % 2 === 0 ? k + 1 : k + 2;

for (let i = 0; i < bound; i++) {
  if (str[k] !== str[m]) {
    count += 1;
  }

  k -= 1;
  m += 1;
}

fs.writeFileSync('output.txt', count.toString());
