function solution(n,a,b)
{
  let count = 1;
  
  while (Math.ceil(a/2) !== Math.ceil(b/2)) {
    count++;
    a = Math.ceil(a/2);
    b = Math.ceil(b/2);
  }
  
  return count;
}