function solution(numbers, num1, num2) {
    // 제안사항을 만족하는 경우만 답변을 return
    if (1 < numbers.length && numbers.length < 31){
       if (-1 < num1 && num1 < num2 && num2 < numbers.length){
           var answer = [];
           for (var i = 0; i < numbers.length; i++){
               if(-1 < numbers[i] && numbers[i] < 1001){
                   if (num1-1 < i && i < num2 +1){
                       answer.push(numbers[i]);
                   }
               }
           }
           return answer;
       } 
    }
    else {
        console.log("wrong input!");
    }
}