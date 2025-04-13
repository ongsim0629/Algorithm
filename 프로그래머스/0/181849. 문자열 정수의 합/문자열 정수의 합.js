function solution(num_str) {
    let answer = 0;
    for (let char of num_str){
        answer += Number(char);
    }
    return answer;
}