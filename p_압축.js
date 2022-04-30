function solution(msg) {
  let answer = [];
  let alpha_dict = {};

  let num = 1;
  for (let i = 0; i < 26; i++) {
    alpha_dict[String.fromCharCode(i + 65)] = num;
    num++;
  }

  cur_idx = 0;
  while (cur_idx < msg.length) {
    next = 1;
    while (
      msg.substr(cur_idx, next) in alpha_dict &&
      cur_idx + next <= msg.length
    ) {
      next++;
    }
    answer.push(alpha_dict[msg.substr(cur_idx, next - 1)]);
    alpha_dict[msg.substr(cur_idx, next)] = num;
    num++;
    cur_idx = cur_idx + next - 1;
  }
  return answer;
}
const msg = "ABABABABABABABAB"; // 22, 23번째
console.log(solution(msg));
