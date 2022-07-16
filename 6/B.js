const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8').toString().trim();

const [[N], [...arr], [M], [...targets]] = fileContent
  .split('\n')
  .map((e) => e.trim().split(' ').map(Number));

const result = getResult(arr, targets);

fs.writeFileSync('output.txt', result);

function getResult(arr, targets) {
  const resultArr = [];
  let leftIdx, rightIdx;

  for (const target of targets) {
    const leftCheck = (idx, array) => target <= array[idx];
    const rightCheck = (idx, array) => array[idx] <= target;

    leftIdx = leftBinSearch(0, arr.length - 1, leftCheck, arr);
    rightIdx = rightBinSearch(0, arr.length - 1, rightCheck, arr);

    if (arr[leftIdx] === arr[rightIdx] && arr[rightIdx] === target) {
      resultArr.push([leftIdx + 1, rightIdx + 1]);
    } else {
      resultArr.push([0, 0]);
    }
  }

  return resultArr.map((e) => e.join(' ')).join('\n');
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

function rightBinSearch(l, r, check, params) {
  let m;

  while (l < r) {
    m = Math.floor((l + r + 1) / 2);

    if (check(m, params)) {
      l = m;
    } else {
      r = m - 1;
    }
  }

  return l;
}
