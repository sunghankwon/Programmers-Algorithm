function solution(s) {
  const stringList = s.split(" ");
  let result = [];

  for (let i = 0; i < stringList.length; i++) {
    let word = stringList[i];
    let transformedWord = '';

    for (let j = 0; j < word.length; j++) {
      if (j % 2 === 0) {
        transformedWord += word[j].toUpperCase();
      } else {
        transformedWord += word[j].toLowerCase();
      }
    }

    result.push(transformedWord);
  }

  return result.join(" ");
}
