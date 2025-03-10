function solution(n, control) {
    let answer = n;
    for (let char of control){
        if(char === 'w'){
            answer += 1;
        }
        else if (char === 'a'){
            answer -= 10;
        }
        else if (char === 's'){
            answer -= 1;
        }
        else if (char === 'd'){
            answer += 10;
        }
    }
    return answer;
}