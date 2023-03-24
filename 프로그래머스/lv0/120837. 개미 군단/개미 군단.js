function solution(hp) {
    if (-1 < hp && hp < 10001){
        var answer = 0;
        // 장군개미
        answer += parseInt(hp/5);
        // 남은 체력 변수 설정
        var remain = hp % 5;
        // 병정개미
        answer += parseInt(remain/3);
        // 남은 체력 다시 설정
        remain = remain % 3;
        // 일개미
        answer += parseInt(remain/1);
        return answer;
    }
}