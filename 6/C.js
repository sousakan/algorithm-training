const fs = require('fs');
const fileContent = fs.readFileSync('cubroot.in', 'utf8').toString().trim();

const [a, b, c, d] = fileContent.split(' ').map(Number);

const leftCheck =
  f(Number.MIN_SAFE_INTEGER, a, b, c, d) > 0 ? isLeft1 : isLeft2;

const result = binSearch(-110000, 200000000, leftCheck, [a, b, c, d]);

fs.writeFileSync('cubroot.out', result.toFixed(6));

function binSearch(l, r, leftCheck, params) {
  const eps = 1e-6;
  let m;

  while (r - l > eps) {
    m = (l + r) / 2;

    if (leftCheck(m, params)) {
      l = m;
    } else {
      r = m;
    }
  }

  return m;
}

function f(x, a, b, c, d) {
  return a * x ** 3 + b * x ** 2 + c * x + d;
}

function isLeft1(m, [a, b, c, d]) {
  return f(m, a, b, c, d) > 0;
}

function isLeft2(m, [a, b, c, d]) {
  return f(m, a, b, c, d) < 0;
}
