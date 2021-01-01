function solution(numbers) {
    var answer = [];
    const set = new Set();
    for(let i = 0; i < numbers.length; ++i){
        for(let j = 0; j < numbers.length; ++j){
            if(i != j){
                set.add(numbers[i] + numbers[j]);
            }
        }
    }
    set.forEach((numbers)=>{
        answer.push(number);
    })
    answer.sort((a,b)=>(a-b));
    return answer;
}