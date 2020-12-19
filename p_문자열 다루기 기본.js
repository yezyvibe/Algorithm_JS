function solution(s) {
    var answer = false;
    if(s.length === 4 || s.length === 6){
        for(var i=0; i<s.length; i++){
            if(Number.isInteger(parseInt(s[i]))){
                answer = true;
            }else{
                answer = false;
                break;
            }
        }
    }
    return answer;
}

/*
function solution(s) {
    if (s.length === 4 || s.length === 6){
        for (var i=0; i<s.length; i++){
            if (!Number.isInteger(parseInt(s[i]))){
                return false;
                break;
            } 
        }
        return true;
    } else {
        return false;
    }
}
*/