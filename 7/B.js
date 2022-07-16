const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8').toString().trim();

const [[N], ...arr] = fileContent
  .split('\n')
  .map((e) => e.trim().split(' ').map(Number));

let count = 0;
let maxCount = -1;

const IN = 1;
const OUT = -1;

const events = [];

for (const [arrivalT, procT] of arr) {
  const departureT = arrivalT + procT;

  events.push([arrivalT, IN]);
  events.push([departureT, OUT]);
}

events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

for (const [time, type] of events) {
  if (type === IN) {
    count += 1;
  } else {
    count -= 1;
  }

  maxCount = Math.max(count, maxCount);
}

fs.writeFileSync('output.txt', maxCount.toString());
