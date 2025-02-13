function solution(info, n, m) {
    const len = info.length;
    // dp[index][aTrace][bTrace] = 해당 상태에서의 최소 A 흔적
    // -2: 미방문, -1: 불가능한 경우
    const dp = Array(len + 1).fill(null).map(() => 
        Array(n).fill(null).map(() => 
            Array(m).fill(-2)
        )
    );
    
    function getMinTrace(index, aTrace, bTrace) {
        // 기저 사례: 모든 물건을 처리한 경우
        if (index === len) {
            return aTrace;
        }
        
        // 이미 계산된 경우
        if (dp[index][aTrace][bTrace] !== -2) {
            return dp[index][aTrace][bTrace];
        }
        
        let minResult = Infinity;
        const [aTraceForItem, bTraceForItem] = info[index];
        
        // A가 물건을 훔치는 경우
        if (aTrace + aTraceForItem < n) {
            const result = getMinTrace(index + 1, aTrace + aTraceForItem, bTrace);
            if (result !== -1) {
                minResult = Math.min(minResult, result);
            }
        }
        
        // B가 물건을 훔치는 경우
        if (bTrace + bTraceForItem < m) {
            const result = getMinTrace(index + 1, aTrace, bTrace + bTraceForItem);
            if (result !== -1) {
                minResult = Math.min(minResult, result);
            }
        }
        
        // 결과 저장 및 반환
        dp[index][aTrace][bTrace] = minResult === Infinity ? -1 : minResult;
        return dp[index][aTrace][bTrace];
    }
    
    const result = getMinTrace(0, 0, 0);
    return result === -1 ? -1 : result;
}