function solution(n) {
  const result = [];

  function hanoi(num, from, to, other) {
    if (num !== 0) {
      hanoi (num - 1, from, other, to);
      result.push([from, to])
	  hanoi (num -1, other, to, from);
    }  
  }
    
  hanoi(n,1,3,2)
  
  return result;
}
