function solution(arr, n) {
    return arr.map((value, index) => {
        // 길이가 홀수일 때는 짝수 인덱스에 n 더하기
        if (arr.length % 2 === 1 && index % 2 === 0) {
            return value + n;
        }
        // 길이가 짝수일 때는 홀수 인덱스에 n 더하기
        if (arr.length % 2 === 0 && index % 2 === 1) {
            return value + n;
        }
        // 나머지 인덱스는 그대로 반환
        return value;
    });
}
