const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8').toString().trim();

let [[M], ...ranges] = fileContent
  .split('\n')
  .map((e) => e.trim().split(/\s+/).map(Number));

ranges = ranges.filter(([left, right]) => left < M && right > 0);
ranges.sort((a, b) => a[0] - b[0]);

const result = getResult(ranges, M);

fs.writeFileSync('output.txt', result);

function getResult(ranges, M) {
  const resultArr = [];

  let border = 0;
  let max = 0;
  let bestLeft = -1;
  let bestRight = -1;

  for (const [left, right] of ranges) {
    if (M < border) {
      break;
    }

    if (border < left) {
      max = 0;
      border = bestRight;
      resultArr.push([bestLeft, bestRight]);
    }

    if (left <= border && border < right && right - border > max) {
      max = right - border;
      bestLeft = left;
      bestRight = right;
    }
  }

  if (border < M) {
    border = bestRight;
    resultArr.push([bestLeft, bestRight]);
  }

  if (border < M) {
    return 'No solution';
  } else {
    return (
      resultArr.length + '\n' + resultArr.map((e) => e.join(' ')).join('\n')
    );
  }
}
