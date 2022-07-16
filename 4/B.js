const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8').toString().trim();

const strArray = fileContent.split('\n');

const dict = new Map();
let result;

for (let i = 0; i < strArray.length; i++) {
  let [name, voteNumber] = strArray[i].split(' ');
  voteNumber = parseInt(voteNumber);

  if (!dict.has(name)) {
    dict.set(name, 0);
  }

  dict.set(name, dict.get(name) + voteNumber);
}

result = [...dict]
  .sort()
  .map((e) => e.join(' '))
  .join('\n');

fs.writeFileSync('output.txt', result);
