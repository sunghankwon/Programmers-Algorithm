function solution(num) {
  function collatz(number, count) {
    if (count === 500) {
      return -1;
    }
    if (number === 1) {
      return count;
    } 
    if (number % 2 === 0) {
      return collatz(number / 2, count + 1);
    } else {
      return collatz(number * 3 + 1, count + 1);
    }
  }
  return collatz(num, 0);
}
