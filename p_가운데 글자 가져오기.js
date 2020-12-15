function solution(s) {
    
    if (s.length % 2 == 0){
        var len = s.length;
        var answer = s.substr(len/2-1,2);
        return answer;
    }else{
        var len = s.length;
        var answer = s.substr(len/2,1);
        return answer;
    }
}