const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8').toString().trim();
const strArray = fileContent.split('\n');

const seatNumDict = new Map();
const quotFractDict = new Map();
const voteNumDict = new Map();

let PICH;
let totalVoteNum = 0;
let totalSeatNum = 0;

const resultArray = [];
let result;

for (let i = 0; i < strArray.length; i++) {
  const name = strArray[i].split(' ').slice(0, -1).join(' ');
  const voteNum = parseInt(strArray[i].split(' ').pop().trim());

  voteNumDict.set(name, voteNum);
  totalVoteNum += voteNum;
}

PICH = totalVoteNum / 450;

for (const [name, voteNum] of voteNumDict) {
  const seatNum = Math.floor(voteNum / PICH);
  seatNumDict.set(name, seatNum);
  totalSeatNum += seatNum;
}

if (totalSeatNum < 450) {
  for (const [name, voteNum] of voteNumDict) {
    const quot = voteNum / PICH;
    const quotFract = quot - Math.floor(quot);
    quotFractDict.set(name, quotFract);
  }

  const sortedArr = [...quotFractDict]
    .sort(
      (a, b) => b[1] - a[1] || voteNumDict.get(b[0]) - voteNumDict.get(a[0])
    )
    .map((e) => e[0]);

  let remainedVoteNum = 450 - totalSeatNum;

  for (let i = 0; i < sortedArr.length; i++) {
    if (remainedVoteNum > 0) {
      seatNumDict.set(sortedArr[i], seatNumDict.get(sortedArr[i]) + 1);
      remainedVoteNum -= 1;
    } else {
      break;
    }
  }
}

for (const [name, voteNum] of voteNumDict) {
  resultArray.push([name, seatNumDict.get(name)]);
}

result = resultArray.map((e) => e.join(' ')).join('\n');

fs.writeFileSync('output.txt', result);
