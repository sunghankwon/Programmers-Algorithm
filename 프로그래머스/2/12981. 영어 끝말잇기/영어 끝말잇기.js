function solution(n, words) {
  const set = new Set();
  let man = 0;
  
  for (let i = 0; i < words.length; i++) {
    if (man < n) {
      man++;
    } else {
      man = 1;
    }
    if (i !== 0 && words[i][0] !== words[i - 1][words[i - 1].length - 1]) {
      time = Math.ceil((i + 1) / n)
      return [man, time]
    }
    
    if (!set.has(words[i])) {
      set.add(words[i]);
      continue;
    } else {
      time = Math.ceil((i + 1) / n)
      return [man, time]
    }
  }
  return [0,0]
}
