function check(chess, row) {
  for (let i = 0; i < row; i += 1) {
    if (
      // 이전 행까지 확인했을 때 동일한 열에 위치한 게 있는지, 또는 대각선에 위치하는지
      chess[i] === chess[row] ||
      Math.abs(chess[i] - chess[row]) === row - i
    ) {
      return false;
    }
  }
  return true;
}

function search(chess, row) {
  const n = chess.length;
  let count = 0;
  if (n === row) return 1;

  for (let col = 0; col < n; col++) {
    // 모든 열을 순회
    chess[row] = col;
    if (check(chess, row)) count += search(chess, row + 1);
  }

  return count;
}

function solution(n) {
  const arr = Array.from(Array(n), () => 0);
  return search(arr, 0);
}

console.log(solution(4));
