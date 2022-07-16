const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8').toString().trim();

const [A, K, B, M, X] = fileContent.split(' ').map(BigInt);

const daysNum = leftBinSearch(BigInt(1), BigInt(X), check, [A, K, B, M, X]);

fs.writeFileSync('output.txt', daysNum.toString());

function calcFelledThrees(day, everyNth, threesNum) {
  return day * threesNum - threesNum * (day / everyNth);
}

function check(day, [A, K, B, M, X]) {
  return calcFelledThrees(day, K, A) + calcFelledThrees(day, M, B) >= X;
}

function leftBinSearch(l, r, check, params) {
  let m;

  while (l < r) {
    m = (l + r) / BigInt(2);

    if (check(m, params)) {
      r = m;
    } else {
      l = m + BigInt(1);
    }
  }

  return l;
}
