function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let cur = s[i];
    if (stack.length === 0) {
      if (cur === ")") return false;
      stack.push(cur);
      continue;
    }
    if (cur === "(") {
      stack.push("(");
    } else if (cur === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      }
    }
  }
  return stack.length > 0 ? false : true;
}
