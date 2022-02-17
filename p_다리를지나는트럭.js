function solution(bridge_length, weight, truck_weights) {
  let bridge = new Array(bridge_length - 1).fill(0);
  let current = truck_weights.shift();
  bridge.push(current);
  let time = 1;
  let currentWeight = current;

  while (currentWeight > 0 || truck_weights.length > 0) {
    time++;
    currentWeight -= bridge.shift();
    if (currentWeight + truck_weights[0] <= weight) {
      let tmp = truck_weights.shift();
      bridge.push(tmp);
      currentWeight += tmp;
    } else {
      bridge.push(0);
    }
  }
  return time;
}
