const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8').toString().trim();

const [[n, m], a, ...ranges] = fileContent
  .split('\n')
  .map((e) => e.trim().split(' ').map(Number));

const events = [];

const POINT = 'Point';
const LEFT = 'Left';
const RIGHT = 'Right';

const prefArr = [];

let result;

let count = 0;

for (let i = 0; i < n; i++) {
  events.push([a[i], POINT]);
}

for (let i = 0; i < m; i++) {
  const left = ranges[i][0];
  const right = ranges[i][1];

  events.push([[left, i], LEFT]);
  events.push([[right, i], RIGHT]);
}

events.sort(function (a, b) {
  const A = a[1] === POINT ? a[0] : a[0][0];
  const B = b[1] === POINT ? b[0] : b[0][0];
  const C = a[1] === POINT ? 0 : a[1] === LEFT ? -1 : 1;
  const D = b[1] === POINT ? 0 : b[1] === LEFT ? -1 : 1;

  return A - B || C - D;
});

for (let i = 0; i < events.length; i++) {
  if (events[i][1] === POINT) {
    count += 1;
  }

  prefArr.push(count);
}

for (let i = 0; i < events.length; i++) {
  if (events[i][1] === LEFT) {
    const idx = events[i][0][1];
    const leftCount = prefArr[i];

    ranges[idx].push(leftCount);
  }

  if (events[i][1] === RIGHT) {
    const idx = events[i][0][1];

    const leftCount = ranges[idx][2];
    const rightCount = prefArr[i];
    const count = rightCount - leftCount;

    ranges[idx][2] = count;
  }
}

result = ranges.map((e) => e[2]).join(' ');

fs.writeFileSync('output.txt', result);
