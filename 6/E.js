const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8').toString().trim();

const [n, k, ...points] = fileContent.split(/[ \n]/).map(Number);

points.sort((a, b) => a - b);

const result = leftBinSearch(0, points[n - 1] - points[0], check, [points, k]);

fs.writeFileSync('output.txt', result.toString());

function leftBinSearch(left, right, check, params) {
  let m;

  while (left < right) {
    m = Math.floor((left + right) / 2);

    if (check(m, params)) {
      right = m;
    } else {
      left = m + 1;
    }
  }

  return left;
}

function check(l, [points, k]) {
  let countSegment = 0;
  let segmentright = points[0] - 1;

  for (let i = 0; i < points.length; i++) {
    if (points[i] > segmentright) {
      countSegment += 1;

      segmentright = points[i] + l;
    }
  }

  return countSegment <= k;
}
