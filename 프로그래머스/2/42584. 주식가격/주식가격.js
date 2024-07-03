function solution(prices) {
  let result = [];
  
  for (let i = 0; i < prices.length; i++) {
    let count = 0;
    for (let j = i + 1; j < prices.length; j++) {
      count++;
      if (prices[i] > prices[j]) {
        result.push(count);
        break;
      }
    }
    if (result.length === i) {
      result.push(count);
    }
  }
  return result;
}
