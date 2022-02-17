function isRightBracket(s) {
  let tmp = [];
  for (let i = 0; i < s.length; i++) {
    let el = s[i];
    if (tmp.length === 0) {
      if (el === ")") return false;
    }
    if (el === "(") {
      tmp.push("(");
    } else if (el === ")") {
      if (tmp[tmp.length - 1] == "(") {
        tmp.pop();
      }
    }
  }
  if (tmp.length > 0) return false;
  return true;
}

function removeAndReverse(s) {
  s = s.substring(1, s.length - 1);
  let tmp = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      tmp += ")";
    } else {
      tmp += "(";
    }
  }
  return tmp;
}

function solution(p) {
  // 1. 빈문자열 처리
  if (p === "") {
    return "";
  }
  // 올바른 괄호인지 먼저 체크
  if (isRightBracket(p)) return p;

  // 2. 균형잡힌 괄호 문자열로 분리
  let leftCnt = 0;
  let rightCnt = 0;
  let separatedU = "";
  let separatedV = "";
  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") {
      leftCnt++;
    } else {
      rightCnt++;
    }
    separatedU += p[i];
    if (leftCnt === rightCnt) {
      separatedV = p.substring(i + 1);
      break;
    }
  }

  // u가 올바른 괄호 문자열인 경우 v 체크
  if (isRightBracket(separatedU)) return separatedU + solution(separatedV);

  // u가 올바른 괄호 문자열 아닌 경우
  return "(" + solution(separatedV) + ")" + removeAndReverse(separatedU);
}

// console.log(solution("()))((()"));
// console.log(isRightBracket("(())"));
// console.log(removeAndReverse("(())"));
