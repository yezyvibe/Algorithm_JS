const solution = (n) => {
    // n까지 숫자를 담은 배열 만들기
    let arr = [];
    for(let i=1; i<=n; i++){
        arr.push(i);
    }
    for(let i=1; i*i<n; i++){
        if(arr[i]){
            let num = arr[i];
            for(let j = num*num; j<=n; j += num){
                arr[j-1] = 0;
            }
        }
    }
    let answer = arr.filter((number) => number);
    answer.shift();
    return answer.length;
}


/* 시간초과

function solution(n) {
    var answer = 0;
    for(let i=2; i<=n; i++){
        var chk = true;
        for(let j=2; j<=i; j++){
            if(i !==j && i%j === 0){
                chk = false;
                break;
            }
        }
        if(chk) answer++
    }
    return answer;
}

*/