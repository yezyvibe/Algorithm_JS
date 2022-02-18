function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);
  arr.forEach((el, idx, arr) => {
    const fixer = el;
    const restArr = arr.filter((_, index) => index != idx);
    const permutationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permutationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });
  return result;
}

function solution(expression) {
  // 정규 표현식 활용하기
  const formula = expression.split(/(\D)/); // 숫자가 아닌 것을 기준으로 모두 나누기
  const operators = Array.from(new Set(expression.match(/[\+\-\*]/g))); // set으로 연산자 중복 제거
  const permuList = permutation(operators, operators.length);
  let answer = 0;
  permuList.forEach((operationOrder) => {
    console.log(operationOrder, "시작");
    const tmp = formula.slice(); // 배열 복사
    operationOrder.forEach((op) => {
      while (tmp.includes(op)) {
        const cur = tmp.indexOf(op);
        const prev = tmp[cur - 1];
        const next = tmp[cur + 1];
        let result = 0;
        switch (op) {
          case "*":
            result = +prev * +next;
            break;
          case "-":
            result = +prev - +next;
            break;
          case "+":
            result = +prev + +next;
            break;
        }
        console.log(op, result);
        tmp.splice(cur - 1, 3, result.toString());
        console.log(tmp);
      }
    });
    answer = Math.max(answer, Math.abs(tmp[0]));
  });
  return answer;
}

console.log(solution("50*6-3*2"));
