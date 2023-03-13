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

/* 
다른 사람들 코드 -> 화살표 함수 쓰니까 엄청 간단하다.
나도 쓰던 것만 쓰지 말고 새로운 것도 좀 써보쟈ㅑ

const solution = (num1, num2) => num1 % num2

*/
