function countLink(n, adj, start) {
  let stack = [start];
  let visit = Array.from({ length: n + 1 }, (val, idx) => 0);
  visit[start] = 1;

  while (stack.length > 0) {
    const cur = stack.pop();
    adj[cur].forEach((node) => {
      if (visit[node] === 0) {
        visit[node] = 1;
        stack.push(node);
      }
    });
  }
  console.log(visit);
  return visit;
}

function solution(n, wires) {
  // 완전탐색 하나씩 끊어서 몇개로 나눠지는지 결과 확인 -> 차이 제일 안나는 것으로 저장
  // 우선 인접배열 만들기
  adj = [];
  for (let i = 0; i < n + 1; i++) {
    adj.push([]);
  }
  for (let i = 0; i < wires.length; i++) {
    const a = wires[i][0];
    const b = wires[i][1];
    adj[a].push(b);
    adj[b].push(a);
  }

  let min = 100;
  // 연결 상태 하나씩 끊어보기
  wires.forEach((el) => {
    const x = el[0];
    const y = el[1];
    adj[x] = adj[x].filter((item) => item != y);
    adj[y] = adj[y].filter((item) => item != x);
    // 함수 돌리고
    console.log(x, y);
    const cnt = countLink(n, adj, x).filter((item) => item === 1).length;
    const gap = Math.abs(2 * cnt - n);
    min > gap ? (min = gap) : min;
    // 원상 복구
    adj[x].push(y);
    adj[y].push(x);
  });
  return min;
}

console.log(
  solution(6, [
    [1, 4],
    [6, 3],
    [2, 5],
    [5, 1],
    [5, 3],
  ])
);
