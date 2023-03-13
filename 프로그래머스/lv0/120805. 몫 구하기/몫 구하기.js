function solution(num1, num2) {
    // 제한 사항에 해당하면 값을 return한다.
    if ( (-1 < num1 && num1 < 101) && (-1 < num2 && num2 < 101)){
        var answer = parseInt(num1 / num2);
        return answer;
    }
    else {
        console.log("wrong input!");
    }
}

// 자바스크립트에서의 정수형 숫자로의 형변환은 -> parseInt()