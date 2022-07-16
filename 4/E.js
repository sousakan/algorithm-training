const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8').toString().trim();
const strArr = fileContent.split('\n');

const idThemeDict = new Map();
const themeCountDict = new Map();

let idx = 1;
let id = 0;

let max = -1;
let maxTheme;

while (idx < strArr.length) {
  id += 1;

  if (strArr[idx] == 0) {
    const theme = strArr[idx + 1];
    idThemeDict.set(id, theme);

    idx += 3;
  } else {
    const replyId = parseInt(strArr[idx]);
    const theme = idThemeDict.get(replyId);
    idThemeDict.set(id, theme);

    idx += 2;
  }
}

for (const [id, theme] of idThemeDict) {
  if (!themeCountDict.has(theme)) {
    themeCountDict.set(theme, 0);
  }

  themeCountDict.set(theme, themeCountDict.get(theme) + 1);
}

for (const [theme, count] of themeCountDict) {
  if (count > max) {
    max = count;
    maxTheme = theme;
  }
}

fs.writeFileSync('output.txt', maxTheme);
