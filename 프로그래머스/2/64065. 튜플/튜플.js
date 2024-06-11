function solution(s) {
  const answer = [];
  const result = [];
  const arr = s.split("},");
  const arr2 = [];
  let index = 0;

  
  for (let i = 0; i < arr.length; i++) {
    let str = "";
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].charCodeAt() !== 123 && arr[i][j].charCodeAt() !== 125) {
        str += arr[i][j];
      }
    }
    str = str.split(",")
    arr2.push(str);
  }
  

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i].length === result.length + 1) {
      if (result.length === 0) {
        result.push(arr2[i][0]);
        i = -1;
      } else {
        const copy = [...arr2[i]];
        for (let j = 0; j < result.length; j++) {
          const sub = copy.indexOf(result[j]);
          copy.splice(sub, 1);
        }
        result.push(copy[0]);   
        i = -1;
      }
    }
  }
  for (let i = 0; i < result.length; i++) {
    result[i] = Number(result[i]);
  }
  
  return result;
}
