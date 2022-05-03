function solution(S) {
  let result = [];
  let word = [S[0]];
  let i = 1;
  while (i < S.length) {
    let next = S[i];
    if (word.includes(next)) {
      result.push(word.join(""));
      word = [next];
    } else {
      word.push(next);
    }
    i++;
  }
  result.push(word.join(""));
  return result.length;
}

console.log(solution("dddsrrtgyhffrgr"));
