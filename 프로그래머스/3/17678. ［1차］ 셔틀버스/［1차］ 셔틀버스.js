function solution(n, t, m, timetable) {
  const start = 540;
  let end = start;
  const changeTable = [];
  let result = "";
  
  for (let i = 0; i < n - 1; i++) {
    end += t;
  }
  
  for (let i = 0; i < timetable.length; i++) {
    const time = timetable[i].split(":");
    changeTable.push(Number(time[0]) * 60 + Number(time[1]));
  }
  
  changeTable.sort((a, b) => b - a);
  
  for (let i = 0; i < n; i++) {
    let time = start + t * i;
    for (let j = 0; j < m; j++) {
      if (time >= changeTable[changeTable.length -1]) {
        if (i !== n - 1 || j !== m - 1) {
          changeTable.pop();
        } else {
          result = changeTable[changeTable.length -1]
        }
      }
      if (time < changeTable[changeTable.length -1]) {
        break;
      }
    }
  }
 
  if (result !== "") {
    result = result - 1;
  } else {
    result = end;
  }
  
  const hour = Math.floor(result / 60);
  const min = result % 60 > 9 ? result % 60 : "0" + result % 60;
  const answer = hour > 9 ? `${hour}:${min}` : `0${hour}:${min}`;
  
  return answer;
}