function make_moves(a1, b1, a2, b2, board) {
  let candidates = [];
  // 평행 이동
  const upDown = [-1, 1]; // 상하
  upDown.forEach((item) => {
    if (board[a1 + item][b1] === 0 && board[a2 + item][b2] === 0) {
      candidates.push([a1 + item, b1, a2 + item, b2]);
    }
  });

  const leftRight = [-1, 1]; // 좌우
  leftRight.forEach((item) => {
    if (board[a1][b1 + item] === 0 && board[a2][b2 + item] === 0) {
      candidates.push([a1, b1 + item, a2, b2 + item]);
    }
  });

  if (a1 === a2) {
    // 가로 방향
    const garo = [-1, 1];
    garo.forEach((item) => {
      if (board[a1 + item][b1] === 0 && board[a2 + item][b2] === 0) {
        candidates.push([a1, b1, a1 + item, b1]);
        candidates.push([a2 + item, b2, a2, b2]);
      }
    });
  } else {
    const sero = [-1, 1];
    sero.forEach((item) => {
      if (board[a1][b1 + item] === 0 && board[a2][b2 + item] === 0) {
        candidates.push([a1, b1, a1, b1 + item]);
        candidates.push([a2, b2 + item, a2, b2]);
      }
    });
  }
  return candidates;
}

function solution(board) {
  const n = board.length;
  const new_board = new Array(n + 2)
    .fill()
    .map((_) => new Array(n + 2).fill(1));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      new_board[i + 1][j + 1] = board[i][j];
    }
  }
  let queue = [[1, 1, 1, 2, 0]];
  let visit = new Set(["1112"]); // 값을 넣을 때는 배열 형태 아니고 문자열 형태로 할 때 시간초과 안났음
  while (queue.length) {
    const [x1, y1, x2, y2, cnt] = queue.shift();
    if ((x1 === n && y1 === n) || (x2 === n && y2 === n)) {
      return cnt;
    }
    make_moves(x1, y1, x2, y2, new_board).forEach((next) => {
      if (!visit.has(next.join(""))) {
        queue.push([...next, cnt + 1]);
        visit.add(next.join(""));
      }
    });
  }
}

let board = [
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 1, 1],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 0, 0],
];
console.log(solution(board));
