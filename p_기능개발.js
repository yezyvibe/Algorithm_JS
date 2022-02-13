function solution(progresses, speeds) {
  let work_days = new Array(progresses.length);

  // 남은 총 작업 일수 구하기
  // 아래와 같은 방법이 더 효율적
  // let work_days = progresses.map((progress, index) =>
  //   Math.ceil((100 - progress) / speeds[index])
  // );
  for (let i = 0; i < progresses.length; i++) {
    remain_days = (100 - progresses[i]) / speeds[i];
    let tmp = parseInt(remain_days);
    work_days[i] = remain_days - tmp ? tmp + 1 : tmp;
  }

  let answer = [1];
  for (let i = 1; i < progresses.length; i++) {
    if (work_days[i] > work_days[i - 1]) {
      answer.push(1);
    } else {
      answer[answer.length - 1] += 1;
      work_days[i] = work_days[i - 1];
    }
  }
  return answer;
}

const progresses = [20, 99, 93, 30, 55, 10];
const speeds = [5, 10, 1, 1, 30, 5];
console.log(solution(progresses, speeds));
