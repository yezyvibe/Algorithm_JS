class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  // 뒤에 요소 한개 추가
  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  // 앞에서 요소 한개 뺴기
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(priorities, location) {
  // 큐 초기화
  const queue = new Queue();
  for (let i = 0; i < priorities.length; i++) {
    queue.enqueue(i);
  }
  const result = new Array(priorities.length).fill(0);
  let order = 1;
  while (queue.size() > 0) {
    let curIdx = queue.dequeue();
    let curValue = priorities[curIdx];
    let maxValue = Math.max(...priorities);
    console.log(curIdx, curValue, maxValue);
    if (maxValue > curValue) {
      queue.enqueue(curIdx);
    } else {
      result[curIdx] = order;
      order++;
      priorities[curIdx] = -1;
    }
  }
  return result[location];
}

solution([2, 1, 3, 2], 2);
