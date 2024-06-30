function solution(people, limit) {
  const sortedPeople = [...people].sort((a, b) => b - a);
  let count = 0;
  let left = 0;
  let right = sortedPeople.length - 1;

  while (left <= right) {
    if (sortedPeople[left] + sortedPeople[right] <= limit) {
      right--;
    }
    left++;
    count++;
  }
  
  return count;
}
