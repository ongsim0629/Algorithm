function solution(num1, num2) {
    // 제한 사항에 해당하면 값을 return한다.
    if ( (-50001 < num1 && num1 < 50001) && (-50001 < num2 && num2 < 50001)){
        var answer = num1 - num2;
        return answer;
    }
    else {
        console.log("wrong input!");
    }
}