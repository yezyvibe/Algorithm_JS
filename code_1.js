function solution(N, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  const numArr = [];
  let number = N.toString();
  for (let i = 0; i < 3; i++) {
    numArr.push(parseInt(number.substr(i, 1)));
  }
  let idx = 0;
  while (K > 0) {
    if (numArr[idx] < 9) {
      numArr[idx] += 1;
      K -= 1;
    } else {
      idx += 1;
      if (idx >= 3) {
        break;
      }
    }
  }
  return parseInt(numArr.map((num) => num.toString()).join(""));
}

console.log(solution(521, 10));
