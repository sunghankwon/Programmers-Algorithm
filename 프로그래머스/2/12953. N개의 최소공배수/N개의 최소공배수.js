function solution(arr) {
  let min = lcm(arr[0], arr[1]);
  
  for (let i = 2; i < arr.length; i++) {
    min = lcm(min, arr[i]);
  }
  
  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
  }
  
  return min;
}