const INPUT_PATH = "../inputs/요세푸스문제.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(inputArguments) {
  const [member, kill] = inputArguments;

  const memberList = [];
  const killList = [];

  let killMember = 0;

  for (let i = 1; i <= member; i++) {
    memberList.push(i);
  }

  while (memberList.length > 0) {
    killMember = (killMember + kill - 1) % memberList.length;
    killList.push(memberList.splice(killMember, 1)[0]);
  }

  return `<${killList.join(", ")}>`;
}

// 백준은 return이 아닌 console.log로 결과값을 판단합니다.
// console.log를 활용하여 log로 정답이 출력 되게끔 로직을 작성해 주세요.
console.log(solution(input));
