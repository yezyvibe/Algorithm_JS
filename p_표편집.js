// 링크드리스트 활용

// node 생성자 함수
const Node = function (index, prevNode) {
  this.index = index;
  this.prev = prevNode;
  this.next;
};

function solution(n, k, cmd) {
  // 정답 배열
  let answer = new Array(n);
  for (let i = 0; i < n; i++) {
    answer[i] = "O";
  }

  let prevNode = new Node(0);
  let currentNode;

  // 링크드리스트 생성
  for (let i = 1; i < n; i++) {
    const newNode = new Node(i, prevNode);
    prevNode.next = newNode;
    prevNode = newNode;

    if (i === k) {
      currentNode = newNode;
    }
  }

  const history = [];
  cmd.map((item) => {
    const [command, cnt] = item.split(" ");
    let i = 0;
    switch (command) {
      case "U": // 올라가기
        while (i < cnt && currentNode.prev) {
          currentNode = currentNode.prev; // 이전 노드값이 존재하면 계속 타고 올라가기
          i++;
        }
        break;
      case "D": // 내려가기
        while (i < cnt && currentNode.next) {
          currentNode = currentNode.next;
          i++;
        }
        break;
      case "C": //삭제
        history.push(currentNode); //현재 선택된 노드 먼저 저장
        const prev = currentNode.prev; //이전 노드
        const next = currentNode.next; //다음 노드
        currentNode = next ? next : prev; //삭제 시 다음 노드 있으면 다음 노드 선택, 없으면 이전 노드 선택
        if (prev) prev.next = next;
        if (next) next.prev = prev;
        break;
      case "Z": //복구
        const recentNode = history.pop();
        const prevNode = recentNode.prev;
        const nextNode = recentNode.next;
        if (prevNode) prevNode.next = recentNode;
        if (nextNode) nextNode.prev = recentNode;
        break;
    }
  });

  history.forEach((node) => {
    answer[node.index] = "X";
  });

  return answer.join("");
}
