function solution(numbers, target) {
  let answer = 0;
  dfs(0, 0);
  function dfs(level, sum) {
    if (level === numbers.length) {
      if (sum === target) answer++;
      return;
    }

    dfs(level + 1, sum - numbers[level]);
    dfs(level + 1, sum + numbers[level]);
  }

  return answer;
}

numbers = [1, 1, 1, 1, 1];
target = 3;
console.log(solution(numbers, target));
