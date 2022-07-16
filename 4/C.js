const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8').toString().trim();

const words = fileContent.split(/[ \n]/).map((e) => e.trim());

const dict = new Map();
let result;

for (let i = 0; i < words.length; i++) {
  if (!dict.has(words[i])) {
    dict.set(words[i], 0);
  }

  dict.set(words[i], dict.get(words[i]) + 1);
}

result = [...dict]
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  .map((e) => e[0])
  .join('\n');

fs.writeFileSync('output.txt', result);
