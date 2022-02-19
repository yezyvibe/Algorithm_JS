function solution(record) {
  // key는 유저id, value는 닉네임
  let nickName = {};
  // (a,b) 튜플로 저장, a는 유저id b는 액션
  let chat_result = [];
  let answer = [];

  record.forEach((el) => {
    el = el.split(" ");
    let action = el[0];
    let userId = el[1];
    switch (action) {
      case "Enter":
        nickName[userId] = el[2];
        chat_result.push([userId, "님이 들어왔습니다."]);
        break;
      case "Change":
        nickName[userId] = el[2];
        break;
      case "Leave":
        chat_result.push([userId, "님이 나갔습니다."]);
        break;
    }
  });
  chat_result.forEach((el) => {
    let userId = el[0];
    answer.push(nickName[userId] + el[1]);
  });
  return answer;
}

const record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];
console.log(solution(record));
