function solution(n, lost, reserve) {
    var answer = 0;
    // 체육복 현황을 보여주는 배열 만들기
    var setArr = [];
    for(let i=1; i<=n; i++){
        setArr.push(1); //먼저 주고 시작
        if(reserve.includes(i)){
            setArr[i-1]++
        }
        if(lost.includes(i)){
            setArr[i-1]--
        }
    }
    for(let i=0; i<n; i++){
        if(!setArr[i]){
            if(setArr[i-1] === 2){
                setArr[i]++
                setArr[i-1]--
            }else if(setArr[i+1] ===2){
                setArr[i]++
                setArr[i+1]--
            }
        }
    }
    for(let i=0; i<n; i++){
        if(setArr[i] >= 1){
            answer++
        }
    }
    return answer;
}