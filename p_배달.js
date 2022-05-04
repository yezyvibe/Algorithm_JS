function solution(N, road, K) {
  const dist = new Array(N + 1).fill(Infinity);
  let stack = [[1, 0]];
  const adj = Array.from(Array(N + 1), () => []);
  for (let i = 0; i < road.length; i++) {
    let road_item = road[i];
    adj[road_item[0]].push([road_item[1], road_item[2]]);
    adj[road_item[1]].push([road_item[0], road_item[2]]);
  }
  dist[1] = 0; // 1번 마을은 무조건 갈 수 있도록 처리
  while (stack.length) {
    let tmp = stack.pop();
    let node = tmp[0];
    let dis = tmp[1];

    adj[node].forEach((el) => {
      let nextNode = el[0];
      let nextDis = el[1];

      if (dis + nextDis < dist[nextNode]) {
        dist[nextNode] = dis + nextDis;
        stack.push([nextNode, dis + nextDis]);
      }
    });
  }
  return dist.filter((item) => item <= K).length;
}

const N = 5;
console.log(
  solution(
    N,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3
  )
);
