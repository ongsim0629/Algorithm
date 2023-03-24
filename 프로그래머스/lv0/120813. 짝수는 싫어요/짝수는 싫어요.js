function solution(n) {
    // 제한사항 만족
    if(0 < n && n < 101){
        var answer = [];
        for (var i = 0; i < n+1; i++){
            // 홀수이면 배열에 i 값 추가
            if (i % 2 != 0){
                answer.push(i);
            }
        }
        return answer;
    }
}