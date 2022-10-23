function solution(n, times) {
  times.sort((a, b) => a - b);
  let start = 1;
  let end = times[times.length - 1] * n;
  let mid = 0;
  let answer;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    let completed = 0;
    for (let time of times) {
      completed += Math.floor(mid / time);
    }
    if (completed >= n) {
      end = mid - 1;
      answer = mid;
    } else {
      start = mid + 1;
    }
  }
  return answer;
}

console.log(solution(6, [7, 10]));
