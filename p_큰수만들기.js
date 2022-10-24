function solution(number, k) {
  let stack = [];
  let count = 0;

  for (const item of number) {
    while (count < k && stack[stack.length - 1] < item) {
      // stack 맨 마지막이 item보다 작으면 계속 팝팝
      stack.pop();
      count += 1;
    }
    stack.push(item);
  }
  if (count < k) {
    stack = stack.slice(0, stack.length - k);
  }
  return stack.join("");
}

console.log(solution("98765", 2));
