function solution(n) {
  const num = n.toString(2);
  let ncount = 0;
  let index = n + 1;
  
  for (let i = 0; i < num.length; i++) {
    if (num[i] === "1") {
      ncount = ncount + 1;
    }
  }
  
  while (true) {
    let count = 0;
    const num = index.toString(2);
      
    for (let i = 0; i < num.length; i++) {
      if (num[i] === "1") {
        count = count + 1;
      }
    }
      
    if (count === ncount) {
      return index;
    }
      
    index++;
  }
}
