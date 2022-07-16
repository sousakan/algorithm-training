const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8').toString().trim();

const [L, K, ...seq] = fileContent.split(/[ \n]/).map((e) => parseInt(e));

const result = getResult(seq, L, K);

fs.writeFileSync('output.txt', result.toString());

function getResult(seq, L, K) {
  const isEven = L % 2 === 0;
  const leftCenter = Math.floor(L / 2) - 1;
  const oddCenter = leftCenter + 1;
  let left, right;
  let leftIndex = 0;

  while (seq[leftIndex] <= leftCenter) {
    left = seq[leftIndex];
    leftIndex += 1;
  }

  leftIndex -= 1;

  if (!isEven && seq[leftIndex + 1] === oddCenter) {
    return String(oddCenter);
  } else {
    right = seq[leftIndex + 1];
    return left + ' ' + right;
  }
}
