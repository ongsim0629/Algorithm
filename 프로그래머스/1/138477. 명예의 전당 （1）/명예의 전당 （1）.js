function solution(k, score) {
    const hallOfFame = [];
    const answer = [];

    for (let i = 0; i < score.length; i++) {
        hallOfFame.push(score[i]);
        hallOfFame.sort((a, b) => b - a); // 내림차순 정렬

        if (hallOfFame.length > k) {
            hallOfFame.pop(); // 가장 작은 점수 제거
        }

        answer.push(hallOfFame[hallOfFame.length - 1]); // 현재 명예의 전당 최하위 점수 추가
    }

    return answer;
}