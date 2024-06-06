function solution(s) {
  const arr = s.split(" ");
  
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  
  return min + " " + max;
}
