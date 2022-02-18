function solution(s) {
  s = s.split("");
  let next = [];
  while (s.length > 0) {
    const cur = s.pop();
    if (next.length === 0) {
      next.push(cur);
    } else {
      next[next.length - 1] === cur ? next.pop() : next.push(cur);
      console.log(next);
    }
  }
  if (next.length === 0) {
    return 1;
  }
  return 0;
}

console.log(solution("baabaa"));
