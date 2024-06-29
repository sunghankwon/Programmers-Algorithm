function solution(numbers) {
  const set = new Set();
  let result = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    set.add(numbers[i]);
  }
  
  for (let i = 0; i < 10; i++) {
    if(!set.has(i)) {
      result += i;
    }
  }
  
  return result;
}
