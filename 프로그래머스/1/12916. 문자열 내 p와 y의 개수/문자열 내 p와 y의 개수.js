function solution(s){
  let string = s.toLowerCase();
  let obj = {};
  
  for (let i = 0; i < string.length; i++) {
    if (!obj[string[i]]) {
      obj[string[i]] = 0;
    }
    obj[string[i]]++;
  }
  
  return obj["p"] === obj["y"];
}