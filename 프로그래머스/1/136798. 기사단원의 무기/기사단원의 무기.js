function solution(number, limit, power) {
    let answer = 0;

    for (let i = 1; i <= number; i++) {
        let count = 0;

        // 약수 구하기
        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                count++; // j는 약수
                if (j !== i / j) {
                    count++; // 짝이 되는 다른 약수도 추가
                }
            }
        }

        // 제한 수치 넘는지 확인
        if (count > limit) {
            answer += power;
        } else {
            answer += count;
        }
    }

    return answer;
}
