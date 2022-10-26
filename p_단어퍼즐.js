function solution(strs, t) {
  const dp = Array.from(Array(t.length + 1), () => 0);
  const set = new Set(strs);

  for (let i = 1; i < t.length + 1; i++) {
    dp[i] = Infinity;
    for (let j = 1; j < Math.min(i + 1, 6); j++) {
      const start = i - j;
      const end = i;

      if (set.has(t.slice(start, end))) {
        dp[i] = Math.min(dp[i], dp[i - j] + 1);
      }
    }
  }
  return dp[t.length] === Infinity ? -1 : dp[t.length];
}

solution(["ab", "na", "n", "a", "bn"], "nabnabn");
