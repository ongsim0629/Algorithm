function solution(n) {
    // 제한사항을 충족할 경우
    if (0 < n && n < 1001){
        var answer = 0;
        for (var i = 0; i < n+1; i++){  
            if(i % 2 == 0){
                answer += i;
            }
        }
        return answer;
    }
    // 제한사항을 충족하지 못 한 경우
    else {
        console.log("wrong input!");
    }
}