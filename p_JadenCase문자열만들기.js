function solution(s) {
  let answer = "";
  s = s.split(" ");
  s.forEach((el) => {
    if (el.charAt(0) === "") {
      answer += " ";
    } else {
      if (isNaN(el.charAt(0))) {
        // 문자이면
        el =
          el.charAt(0).toUpperCase() + el.toString().substring(1).toLowerCase();
      } else {
        el = el.charAt(0) + el.substring(1).toLowerCase();
        console.log(el, "1111111111111");
      }
      answer += el;
      answer += " ";
    }
  });
  return answer.substring(0, answer.length - 1);
}

console.log(solution("3people    unFollowed me"));
