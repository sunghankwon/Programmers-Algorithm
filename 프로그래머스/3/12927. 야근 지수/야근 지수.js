function solution(n, works) {
  works.sort((a, b) => b - a);

  while (n > 0) {
    if (works[0] === 0) break;
    works[0] -= 1;
    n--;

    let i = 0;
    while (i < works.length - 1 && works[i] < works[i + 1]) {
      [works[i], works[i + 1]] = [works[i + 1], works[i]];
      i++;
    }
  }

  let result = 0;
  for (const time of works) {
    result += time ** 2;
  }

  return result;
}
