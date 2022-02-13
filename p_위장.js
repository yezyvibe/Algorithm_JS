// 해시 그리고 조합
function solution(clothes) {
  let dict = {};

  for (let i = 0; i < clothes.length; i++) {
    let name = clothes[i][0];
    let type = clothes[i][1];

    type in dict ? dict[type].push(name) : (dict[type] = [name]);
  }

  let answer = 1;
  for (let key in dict) {
    answer *= dict[key].length + 1;
  }
  return answer - 1;
}

clothes = [
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
];
console.log(solution(clothes));
