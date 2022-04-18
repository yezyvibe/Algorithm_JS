function dfs(a, b, arr) {
  let stack = [[a, b]];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const visit = new Array(5);
  for (let i = 0; i < 5; i++) {
    visit[i] = new Array(5).fill(0);
  }
  visit[a][b] = 1;

  while (stack.length > 0) {
    let cur = stack.pop();
    let x = cur[0];
    let y = cur[1];

    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (!(0 <= nx && nx < 5 && 0 <= ny && ny < 5)) {
        continue;
      }
      let next = arr[nx].substr(ny, 1);

      if (Math.abs(a - nx) + Math.abs(b - ny) <= 2 && visit[nx][ny] !== 1) {
        // 맨해튼 거리가 2 이하인 경우만 확인하기
        visit[nx][ny] = 1; // 방문 처리
        if (next === "P") {
          // 사람이 앉아 있으면 거리두기 실패
          return false;
        } else if (next !== "X") {
          // 파티션 아니고 테이블이나 빈 공간이면 갈 수 있는 위치로 스택에 넣기
          stack.push([nx, ny]);
        }
      }
    }
  }
  return true;
}

function solution(places) {
  // 사람이 앉아 있는 곳에서 탐색 시작
  // 이동할 수 있는 지 먼저 확인(파티션은 갈 수 없다) -> 거리 2이하까지 탐색
  const answer = [];
  for (let k = 0; k < 5; k++) {
    let chk = 0;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (places[k][i].substr(j, 1) === "P") {
          let result = dfs(i, j, places[k]);
          if (result === false) {
            answer.push(0);
            chk = 1;
            break;
          }
        }
      }
      if (chk) break;
    }
    if (!chk) answer.push(1);
  }
  return answer;
}
