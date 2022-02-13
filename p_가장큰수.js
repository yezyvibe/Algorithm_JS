function solution(numbers) {
  numbers.reduce((a, b) => a + b) === 0
    ? (answer = "0")
    : (answer = numbers
        .map((number) => String(number))
        .sort((a, b) => b + a - (a + b))
        .join(""));
  return answer;
}

numbers = [0, 0, 0];
console.log(solution(numbers));
