function solution(orders, course) {
  // 메뉴 조합(key)별 주문 횟수(value) 카운트 저장
  let menu = new Map();

  // 조합 구하기
  function combination(order, idx, len, prev) {
    if (prev.length === len) {
      let cur_key = prev.sort().join("");
      if (menu.has(cur_key)) {
        menu.set(cur_key, menu.get(cur_key) + 1);
      } else menu.set(cur_key, 1);
      return;
    }

    for (let i = idx; i < order.length; i++) {
      combination(order, i + 1, len, [...prev, order[i]]);
    }
  }

  // 각 손님별 주문한 단품 메뉴의 모든 조합 구하기
  orders.map((order) => {
    course.map((num) => combination(order, 0, num, []));
  });

  // 주문 횟수 2 이상인 메뉴조합만 주문 횟수로 내림차순
  menu = [...menu.entries()]
    .filter((item) => item[1] > 1)
    .sort((a, b) => b[0].length - a[0].length);

  let result = new Map();
  while (course.length > 0) {
    let currentLen = course.pop();
    let maxVal = 0;
    let tmpMenu = [];
    menu.forEach((el) => {
      if (el[0].length === currentLen) {
        if (el[1] > maxVal) {
          maxVal = el[1];
          tmpMenu = [el[0]];
        } else if (el[1] === maxVal) {
          maxVal = el[1];
          tmpMenu = [...tmpMenu, el[0]];
        }
      }
      result.set(currentLen, tmpMenu);
    });
  }
  result = [...result.values()];
  return result.flat().sort();
}

const orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
const course = [2, 3, 4];
console.log(solution(orders, course));
