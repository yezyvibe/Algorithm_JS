function bfs(start, adj) {
  q = [start];
  visit = new Array(adj.length).fill(0);
  visit[start] = 1;

  while (q.length > 0) {
    node = q.shift();
    for (let next of adj[node]) {
      if (visit[next]) continue;
      q.push(next);
      visit[next] = visit[node] + 1;
    }
  }
  return visit;
}

function solution(n, edge) {
  const adj = Array.from(Array(n + 1), () => new Array());
  for (let [a, b] of edge) {
    adj[a].push(b);
    adj[b].push(a);
  }
  const result = bfs(1, adj);
  const maxVal = Math.max(...result);
  return result.filter((val) => val === maxVal).length;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
