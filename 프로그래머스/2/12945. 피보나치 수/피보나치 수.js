function solution(n) {
  if (n <= 1) {
    return n;
  }

  let prev = 0;
  let current = 1;
  const MOD = 1234567;

  for (let i = 2; i <= n; i++) {
    let next = (prev + current) % MOD;
    prev = current;
    current = next;
  }
  
  return current;
}
