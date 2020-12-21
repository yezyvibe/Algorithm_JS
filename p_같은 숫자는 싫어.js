function solution(arr)
{
    var answer = [];
    var before = arr[0];
    answer.push(before);

    for (var i=1; i<arr.length; i++){
        if (before !== arr[i]){
            before = arr[i];
            answer.push(before);
        }
    }
    return answer;
}