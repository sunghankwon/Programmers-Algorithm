function solution(s) {
  let answer = s
  let arr = [];
  let count = 1;
  
  for (let i = 1; i < s.length; i++) {
    let str = s;
    let index = 0;
      
    while (str.length > 0) {
      arr.push(str.substring(0, i));
      str = str.replace(arr[index], "");
      index++;
    }
    
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[j + 1]) {
        let start = j;
        
        for (let k = start; k < arr.length; k++) {
          if (arr[k] === arr[k + 1]) {
            count++;
          } else {
            break;
          }
        }
        arr.splice(j, count - 1, count);
        count = 1;
      }
    }
      
    let changeStr = arr.join("");
      
    if (answer.length > changeStr.length) {
      answer = changeStr;
    }
    arr = [];
  }
  
  return answer.length;
}