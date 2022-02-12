function solution(s) {
  let min_length = s.length;

  for (let i = 1; i <= s.length / 2; i++) {
    let prev = s.substr(0, i);
    let cnt = 1;
    let tmp_str = "";
    for (let k = i; k < s.length; k += i) {
      let cur = s.substr(k, i);
      if (prev === cur) cnt++;
      else {
        tmp_str += (cnt > 1 ? String(cnt) : "") + prev;
        cnt = 1;
        prev = cur;
      }
    }
    tmp_str += (cnt > 1 ? String(cnt) : "") + prev;
    min_length = Math.min(min_length, tmp_str.length);
  }
  return min_length;
}

console.log(solution("aabbaccc"));
