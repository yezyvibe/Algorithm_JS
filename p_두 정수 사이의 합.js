function solution(a, b) {
    var answer = 0;
    var temp = 0;
    if (a>b){
        temp = a;
        a = b;
        b = temp;        
    }
    for(let i=a; i <= b; i++){
        answer += i
    }
    return answer
}