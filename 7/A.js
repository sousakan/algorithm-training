const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8').toString().trim();

const [[N], ...ranges] = fileContent
  .split('\n')
  .map((e) => e.trim().split(' ').map(Number));

ranges.sort((a, b) => a[0] - b[0]);

let start = ranges[0][0] - 1;
let end = ranges[0][0] - 1;
let l = 0;

for (const [left, right] of ranges) {
  if (isLeft(right, end)) {
    continue;
  }

  if (isIntersected(start, end, left, right)) {
    start = end;
    end = right;
  }

  if (isSeparated(end, left)) {
    start = left;
    end = right;
  }

  l += end - start;
}

fs.writeFileSync('output.txt', l.toString());

function isLeft(right, end) {
  return right <= end;
}

function isSeparated(end, left) {
  return end < left;
}

function isIntersected(start, end, left, right) {
  return left <= end && end < right;
}
