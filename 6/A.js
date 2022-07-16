const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8').toString().trim();

const [[N], [...arr], [K], ...ranges] = fileContent
  .split('\n')
  .map((e) => e.trim().split(' ').map(Number));

arr.sort((a, b) => a - b);

const result = getResult(arr, ranges);

fs.writeFileSync('output.txt', result);

function getResult(arr, ranges) {
  const resultArr = [];
  let leftIdx, rightIdx;

  for (const [l, r] of ranges) {
    const leftCheck = (idx, array) => l <= array[idx];
    const rightCheck = (idx, array) => r < array[idx];

    leftIdx = leftBinSearch(0, arr.length, leftCheck, arr);
    rightIdx = leftBinSearch(0, arr.length, rightCheck, arr);

    resultArr.push(rightIdx - leftIdx);
  }

  return resultArr.join(' ');
}

function leftBinSearch(l, r, check, params) {
  let m;

  while (l < r) {
    m = Math.floor((l + r) / 2);

    if (check(m, params)) {
      r = m;
    } else {
      l = m + 1;
    }
  }

  return l;
}
