function solution(n) {
    let answer = 0;

    if (n % 2 === 1) {  // 홀수인 경우
        for (let i = 1; i <= n; i += 2) {
            answer += i;  // 홀수의 합
        }
    } else {  // 짝수인 경우
        for (let i = 2; i <= n; i += 2) {
            answer += i ** 2;  // 짝수의 제곱의 합
        }
    }
    return answer;
}
