const INPUT_PATH = "../inputs/창고 다각형.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const barsNumber = parseInt(input[0]);
const bars = input
  .slice(1)
  .map((line) => line.split(" ").map(Number))
  .sort((a, b) => a[0] - b[0]);

function solution(barsNumber, bars) {
  let maxHeight = 0;
  let maxIndex = 0;

  for (let i = 0; i < barsNumber; i++) {
    if (bars[i][1] > maxHeight) {
      maxHeight = bars[i][1];
      maxIndex = i;
    }
  }

  let area = 0;
  let currentHeight = 0;
  let currentX = bars[0][0];

  for (let i = 0; i <= maxIndex; i++) {
    if (bars[i][1] > currentHeight) {
      area += currentHeight * (bars[i][0] - currentX);
      currentHeight = bars[i][1];
      currentX = bars[i][0];
    }
  }
  area += currentHeight * (bars[maxIndex][0] + 1 - currentX);

  currentHeight = 0;
  currentX = bars[barsNumber - 1][0] + 1;

  for (let i = barsNumber - 1; i > maxIndex; i--) {
    if (bars[i][1] > currentHeight) {
      area += currentHeight * (currentX - bars[i][0] - 1);
      currentHeight = bars[i][1];
      currentX = bars[i][0] + 1;
    }
  }
  area += currentHeight * (currentX - bars[maxIndex][0] - 1);

  return area;
}

console.log(solution(barsNumber, bars));
