function solution(t, p) {
    let answer = 0;
    const pLength = p.length;
    const pNum = Number(p);
    
    for (let i = 0; i <= t.length - pLength; i++) {
        const subStr = t.substring(i, i + pLength);
        const subNum = Number(subStr);
        
        if (subNum <= pNum) {
            answer++;
        }
    }
    
    return answer;
}