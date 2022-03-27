function solution(k, m, names, amounts) {
  let prev = ["", 1];
  let answer = 0;
  for (let i = 0; i < names.length; i++) {
    let current = names[i].toUpperCase();
    prev[0] === current ? prev[1]++ : (prev = [current, 1]);
    if (prev[1] >= k || amounts[i] >= m) {
      answer++;
    }
  }
  return answer;
}

const k = 3;
const m = 50000;
const names = [
  "msLEE",
  "jsKim",
  "jsKIM",
  "jskiM",
  "jskim",
  "John",
  "john",
  "John",
  "msLEE",
  "msLEE",
  "jsKIM",
  "roy",
];

const amounts = [
  950, 52524, 1400, 6055, 10000, 4512, 512, 52000, 9000, 49000, 1400, 50000,
];

console.log(solution(k, m, names, amounts));
