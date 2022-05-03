function solution(S) {
  S += "_";
  let answer = "";
  let cur = S[0];
  let cnt = 0;

  for (let i = 1; i < S.length; i++) {
    let next = S[i];
    if (cur === next) {
      cnt++;
      if (cnt < 2) {
        answer += cur;
      }
    } else {
      answer += cur;
      cur = next;
      cnt = 0;
    }
  }
  return answer;
}

console.log(solution("xxxxxtttststsssxxx"));
