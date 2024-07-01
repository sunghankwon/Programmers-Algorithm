function solution(ingredient) {
  const bugerStack = [];
  let count = 0;
  
  for (let i = 0; i < ingredient.length; i++) {
    bugerStack.push(ingredient[i]);
    
    if (bugerStack.length >= 4) {
      const last = bugerStack.slice(-4).join("");
      
      if (last === "1231") {
        count++;
        bugerStack.splice(-4);
      } 
    }
  }

  return count;
}
