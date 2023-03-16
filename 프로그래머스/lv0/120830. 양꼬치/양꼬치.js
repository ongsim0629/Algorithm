function solution(n, k) {
    if (0 < n && n < 1000 && n/10 < k+1 && k < 1000){
        // 일단 양꼬치 먹은 값 계산
        var answer = n * 12000;
        // 근데? 양꼬치 10개 넘게 먹었으면 음료수 개수 다시 계산할래
        if (n > 9){
            // 서비스로 받은 음료수 n/10개
            k -= parseInt(n/10);
        }
        // 이제 k는 진짜 돈 주고 산 음료수 개수이다.
        answer += k * 2000;
        return answer;
    }
    // 제안사항 만족하지 못 할 때
    else {
        console.log("너무 많이 먹었어용;;");
    }
}