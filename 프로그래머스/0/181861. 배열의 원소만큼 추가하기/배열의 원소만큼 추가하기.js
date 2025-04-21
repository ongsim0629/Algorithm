function solution(arr) {
    var answer = [];
    for (let i = 0; i < arr.length; i++){
        for (let j = 1; j < arr[i]+1; j++){
            answer.push(arr[i]);
        }
    }
    return answer;
}