function solution(maps) {
  let queue = [[0, 0]];
  const dk = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const visit = Array.from(Array(maps.length), () =>
    Array(maps[0].length).fill(0)
  );
  visit[0][0] = 1;
  while (queue.length) {
    let cur = queue.shift();
    if (cur[0] === maps.length - 1 && cur[1] === maps[0].length - 1)
      return visit[cur[0]][cur[1]];
    dk.forEach((next) => {
      let nx = cur[0] + next[0];
      let ny = cur[1] + next[1];
      // 범위 체크
      if (
        0 <= nx &&
        nx < maps.length &&
        0 <= ny &&
        ny < maps[0].length &&
        maps[nx][ny] === 1
      ) {
        if (visit[nx][ny] === 0) {
          visit[nx][ny] = visit[cur[0]][cur[1]] + 1;
          queue.push([nx, ny]);
        } else {
          if (visit[cur[0]][cur[1]] + 1 < visit[nx][ny]) {
            visit[nx][ny] = visit[cur[0]][cur[1]] + 1;
            queue.push([nx, ny]);
          }
        }
      }
    });
  }
  if (visit[maps.length - 1][maps[0].length - 1] === 0) return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);
