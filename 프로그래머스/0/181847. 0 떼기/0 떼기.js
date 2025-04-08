function solution(n_str) {
    var answer = '';
    let flag = true;
    for (let char of n_str){
        if (char === "0" && flag === true){
            continue;
        }
        answer += char;
        flag = false;
    }
    return answer;
}