const fs = require('fs');
const fileContent = fs.readFileSync(process.stdin.fd, 'utf8').toString().trim();

const [[S], [, ...A], [, ...B], [, ...C]] = fileContent
  .split('\n')
  .map((e) => e.trim().split(' ').map(Number));

const result = getResult(A, B, C, S);

fs.writeFileSync(process.stdout.fd, result);

function getResult(_A, _B, _C, S) {
  const A = convertAB(_A);
  const B = convertAB(_B);
  const C = convertC(_C);

  let ijk = [A.length, B.length, C.length];

  let idx;
  let sum;

  for (let i = 0; i < A.length; i++) {
    idx = C.length - 1;

    for (let j = 0; j < B.length; j++) {
      while (1) {
        sum = A[i][0] + B[j][0] + C[idx][0];

        if (sum > S && idx > 0) {
          idx -= 1;
          continue;
        }

        if (sum === S) {
          if (isBetter(ijk[0], ijk[1], ijk[2], A[i][1], B[j][1], C[idx][1])) {
            ijk = [A[i][1], B[j][1], C[idx][1]];
          }
        }

        break;
      }
    }
  }

  return ijk[0] !== A.length ? `${ijk[0]} ${ijk[1]} ${ijk[2]}` : '-1';
}

function convertAB(arr) {
  return arr.map((e, i) => [e, i]).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
}

function convertC(arr) {
  return arr.map((e, i) => [e, i]).sort((a, b) => a[0] - b[0] || b[1] - a[1]);
}

function isBetter(oldI, oldJ, oldK, newI, newJ, newK) {
  return (
    newI < oldI ||
    (newI === oldI && newJ < oldJ) ||
    (newI === oldI && newJ === oldJ && newK < oldK)
  );
}
