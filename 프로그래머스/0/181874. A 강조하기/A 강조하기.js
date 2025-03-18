function solution(myString) {
    var answer = '';
    for (let char of myString){
        if (char === 'a' || char === 'A'){
            answer += 'A'
        }
        else {
            answer += char.toLowerCase();
        }
    }
    return answer;
}