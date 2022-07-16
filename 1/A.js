const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8').toString();

const [r, i, c] = fileContent.split('\n').map((i) => parseInt(i));

let x;

if (i === 0 && r !== 0) {
  x = 3;
} else if (i === 0 && r === 0) {
  x = c;
} else if (i === 1) {
  x = c;
} else if (i === 4 && r !== 0) {
  x = 3;
} else if (i === 4 && r === 0) {
  x = 4;
} else if (i === 6) {
  x = 0;
} else if (i === 7) {
  x = 1;
} else {
  x = i;
}

fs.writeFileSync('output.txt', x.toString());
