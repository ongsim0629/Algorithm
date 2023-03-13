function solution(num1, num2) {
    //제한사항 안의 값이 input 되었을 때만 return 값 넘겨주기
    if ((-50001 < num1 && num1 < 50001) && (-50001 < num2 && num2 < 50001)){
        var answer = num1 + num2;
        return answer;
    }
    else{
        console.log("wrong input!");
    }
}