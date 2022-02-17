function solution(s) {
  s = s.substring(1, s.length - 1).split("},");
  for (let i = 0; i < s.length; i++) {
    if (s[i].substring(s[i].length - 1) === "}") {
      s[i] = s[i].substring(1, s[i].length - 1);
    } else {
      s[i] = s[i].substring(1);
    }
    s[i] = s[i].split(",");
  }
  s = s.sort((a, b) => a.length - b.length);

  let answer = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[i].length; j++) {
      if (i === 0) {
        answer.push(parseInt(s[i][j]));
      } else {
        if (!answer.find((item) => item == s[i][j])) {
          answer.push(parseInt(s[i][j]));
        }
      }
    }
  }
  return answer;
}
