function solution(tickets) {
  // 인접 리스트 만들기
  const adj = {};
  for ([a, b] of tickets) {
    a in adj ? adj[a].push(b) : (adj[a] = [b]);
  }
  const result = [];
  dfs("ICN", ["ICN"]);

  function dfs(start, path) {
    if (path.length === tickets.length + 1) {
      result.push(path);
      return;
    }
    if (!(start in adj)) return;
    for (let i = 0; i < adj[start].length; i++) {
      if (adj[start][i] === false) continue;
      let nextAirport = adj[start][i];
      adj[start][i] = false;
      dfs(nextAirport, [...path, nextAirport]);
      adj[start][i] = nextAirport;
    }
  }
  result.sort();
  return result[0];
}

console.log(
  solution([
    ["ICN", "JFK"],
    ["HND", "IAD"],
    ["JFK", "HND"],
  ])
);
