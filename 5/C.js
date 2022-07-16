const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8').toString().trim();

let [[N, M], groups, classrooms] = fileContent
  .split('\n')
  .map((e) => e.trim())
  .map((e) => e.split(' ').map(Number));

let distrArr = [];

let P = 0;
let idx1 = 0;
let idx2 = 0;

let result;

groups = groups.map((e, i) => [e, i + 1]);
classrooms = classrooms.map((e, i) => [e, i + 1]);

groups.sort((a, b) => a[0] - b[0]);
classrooms.sort((a, b) => a[0] - b[0]);

while (idx1 < groups.length && idx2 < classrooms.length) {
  if (groups[idx1][0] + 1 <= classrooms[idx2][0]) {
    distrArr.push([groups[idx1][1], classrooms[idx2][1]]);
    P += 1;
    idx1 += 1;
  }

  idx2 += 1;
}

for (let i = idx1; i < groups.length; i++) {
  distrArr.push([groups[i][1], 0]);
}

distrArr = distrArr.sort((a, b) => a[0] - b[0]).map((e) => e[1]);

result = P + '\n' + distrArr.join(' ');

fs.writeFileSync('output.txt', result);
