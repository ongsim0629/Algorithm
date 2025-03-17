function solution(my_string, alp) {
   let answer = my_string.split('');
    for (let i of alp){
        for (let j = 0; j < answer.length; j++){
            if (answer[j] === i){
                answer[j] = answer[j].toUpperCase();
            }
        }
    }
     return answer.join('');
}