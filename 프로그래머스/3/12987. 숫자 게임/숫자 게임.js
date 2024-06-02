function solution(A, B) {
  const sortedA = A.sort((a, b) => a - b);
  const sortedB = B.sort((a, b) => a - b);
  let count = 0;
  let indexA = 0;
  let indexB = 0;
  
  while(indexA < sortedA.length) {
    if (indexB === sortedB.length) {
      break;
    }
    if (sortedA[indexA] < sortedB[indexB]) {
      count++;
      indexA++;
      indexB++;
      continue;
    }
    indexB++;
  }

  return count;
}