function solution(n, computers) {
  const visit = new Array(n).fill(0);

  function dfs(start) {
    const stack = [start];
    visit[start] = 1;

    while (stack.length > 0) {
      let current = stack.pop();
      for (let i = 0; i < n; i++) {
        next = computers[current][i];
        if (next === 1 && !visit[i]) {
          // 연결돼 있고 방문하지 않았으면 탐색 이어서
          stack.push(i);
          visit[i] = 1;
        }
      }
    }
    return visit.reduce((acc, cur) => acc + cur, 0);
  }

  let answer = 1;
  let tmp = -1;
  for (let i = 0; i < n; i++) {
    let result = dfs(i);
    if (result === n) {
      return answer;
    } else if (tmp != result) {
      answer += 1;
      tmp = result;
    }
  }
  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
