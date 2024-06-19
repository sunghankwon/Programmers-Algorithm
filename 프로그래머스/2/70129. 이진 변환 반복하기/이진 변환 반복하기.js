function solution(s) {
  let count = 0;
  let cycle = 0;
  
  function check(str) {
    let nstr = "";
    cycle++;
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "0") {
        count++;
      } else {
        nstr += "1";
      }
    }
    if (nstr === "1") {
      return ;
    } else {
      return check(nstr.length.toString(2))
    }
  }
  
  check(s);
  
  return [cycle,count]
}
