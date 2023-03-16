function solution(angle) {
    // 제안사항을 충족하는 경우
    if ( 0 < angle && angle < 181 && Number.isInteger(angle) == true ){
        // 예각
        if (0 < angle && angle < 90) {
            var answer = 1;
        }
        // 직각
        else if(angle == 90) {
            var answer = 2;
        }
        // 둔각
        else if (90 < angle && angle < 180){
            var answer = 3;
        }
        // 평각
        else {
            var answer = 4;
        }
        return answer;
    }
    // 제안사항을 만족하지 못 할 때
    else {
        console.log("wrong input!");
    }
}

/*

다른 사람 코드 -> 삼항 연산자 사용법

function solution(angle) {
    return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}


*/
