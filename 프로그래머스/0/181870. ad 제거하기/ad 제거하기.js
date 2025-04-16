function solution(strArr) {
    let answer = [];
    for (let char of strArr){
        if (char.includes('ad')){
            continue;
        }
        else {
            answer.push(char);
        }
    }
    return answer;
}