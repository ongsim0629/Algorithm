function solution(num1, num2) {
    // 제한 사항
    if ((-1 < num1 && num1 <101) && (-1 < num2 && num2 < 101)){
        var answer = num1 % num2
        return answer;
    }
    else {
        console.log("입력 값을 확인해주세요");
    }
}