function solution(survey, choices) {
    // 성격 유형 점수를 저장할 객체
    const scores = {
        R: 0, T: 0,
        C: 0, F: 0,
        J: 0, M: 0,
        A: 0, N: 0
    };
    
    // 각 선택지의 점수 계산
    for (let i = 0; i < survey.length; i++) {
        const [disagree, agree] = survey[i].split('');
        const score = choices[i] - 4;  // -3 ~ 3 사이의 값으로 변환
        
        if (score < 0) {
            scores[disagree] += Math.abs(score);
        } else if (score > 0) {
            scores[agree] += score;
        }
    }
    
    // 각 지표별로 성격 유형 결정
    let answer = '';
    
    // 1번 지표: R vs T
    answer += scores['R'] >= scores['T'] ? 'R' : 'T';
    
    // 2번 지표: C vs F
    answer += scores['C'] >= scores['F'] ? 'C' : 'F';
    
    // 3번 지표: J vs M
    answer += scores['J'] >= scores['M'] ? 'J' : 'M';
    
    // 4번 지표: A vs N
    answer += scores['A'] >= scores['N'] ? 'A' : 'N';
    
    return answer;
}