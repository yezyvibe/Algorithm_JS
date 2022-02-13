function solution(priorities, location) {
  let print_cnt = 0; // 작업된 문서의 개수
  while (priorities.length > 0) {
    let cur = priorities.shift();
    if (priorities.filter((item) => item > cur).length > 0) {
      priorities.push(cur);
    } else {
      // 작업 1개 프린트 완료
      print_cnt++;
      if (location == 0) return print_cnt;
    }
    // 내 문서의 인덱스 조정
    location - 1 < 0 ? (location = priorities.length - 1) : location--;
  }
}

priorities = [2, 1, 3, 2];
location = 2;
console.log(solution(priorities, location));
