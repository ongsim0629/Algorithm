function solution(age) {
    // 제한 사항
    if (0 < age < 121){
        // 2022년 기준 출생년도이며 태어난 연도에 1살이기 때문
        var answer = 2022 - age + 1;
        return answer;
    }
    else {
        console.log("입력값을 확인해주세요.");
    }
}