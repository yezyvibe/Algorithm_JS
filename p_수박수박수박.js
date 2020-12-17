function solution(n) {
    var answer = '';
    for(let i=1; i<n+1; i++){
		if(i%2 === 0){
			answer += '박';
		}else{
			answer += '수';
		};
    }
    return answer;
}

// const waterMelon = n => {
//     return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
// }