function solution(food) {
  let result = "";
  
  for (let i = 0; i < food.length; i++) {
    const str = (i).toString();
    if (food[i] % 2 !== 0) {
      food[i] = food[i] - 1;
    }
    
    result += str.repeat(food[i] / 2);
  }
  
  return `${result}0${result.split("").reverse().join("")}`;
}
