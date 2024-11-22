function solution(k, m, score) {
    let answer = 0;
    score.sort((a, b) => b - a);

    for (let i = 0; i < score.length; i += m) {
        if (i + m <= score.length) {
            const minScore = score[i + m - 1]; 
            answer += minScore * m;
        }
    }
    return answer;
}