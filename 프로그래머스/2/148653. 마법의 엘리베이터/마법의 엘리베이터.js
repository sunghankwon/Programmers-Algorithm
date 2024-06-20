function solution(storey) {
  const str = storey.toString().split("").reverse().join("");
  let count = 0;
  let upNum = 0;
  
  for (let i = 0; i < str.length; i++) {
    let currentNum = Number(str[i]) + upNum;
    upNum = 0;
    
    if (currentNum > 5) {
      count += 10 - currentNum;
      upNum++;
    } else if (currentNum === 5 && i < str.length -1) {
      if (Number(str[i + 1]) >= 5) {
        count += currentNum;
        upNum++;
      } else {
        count += currentNum;
      }
    } else {
      count += currentNum;
    }
  }
  
  if (upNum !== 0) {
    count += upNum;
  }

  return count;
}
