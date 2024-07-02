function solution(progresses, speeds) {
  let reverseProgresses = [...progresses].reverse();
  let reverseSpeeds = [...speeds].reverse();
  let result = [];
  
  while (reverseProgresses.length > 0) {
    let count = 0;
    let sum = reverseProgresses.map(function (num, idx) {
      return num + reverseSpeeds[idx];
    });
    reverseProgresses = sum;
    
    while (reverseProgresses[reverseProgresses.length -1] >= 100) {
      reverseProgresses.pop();
      reverseSpeeds.pop();
      count++;
    }
    if (count > 0) {
      result.push(count);
    }
  }
  return result;
}
