function solution(rny_string) {
    var answer = '';
    for (let char of rny_string){
        if (char === 'm'){
            answer += 'rn';
        }
        else {
            answer += char;
        }
    }
    return answer;
}