function solution(m, n, startX, startY, balls) {
    const answer = [];
    
    // 목표 공들에 대해 각각 계산
    for (const [targetX, targetY] of balls) {
        // 4가지 방향(상,하,좌,우)의 벽에 대한 대칭점을 고려하여 최소 거리 계산
        let minDistance = Infinity;
        
        // 왼쪽 벽에 대한 대칭
        if (!(startY === targetY && startX > targetX)) {
            const dist = Math.pow((-startX) - targetX, 2) + Math.pow(startY - targetY, 2);
            minDistance = Math.min(minDistance, dist);
        }
        
        // 오른쪽 벽에 대한 대칭
        if (!(startY === targetY && startX < targetX)) {
            const dist = Math.pow((2 * m - startX) - targetX, 2) + Math.pow(startY - targetY, 2);
            minDistance = Math.min(minDistance, dist);
        }
        
        // 아래쪽 벽에 대한 대칭
        if (!(startX === targetX && startY > targetY)) {
            const dist = Math.pow(startX - targetX, 2) + Math.pow((-startY) - targetY, 2);
            minDistance = Math.min(minDistance, dist);
        }
        
        // 위쪽 벽에 대한 대칭
        if (!(startX === targetX && startY < targetY)) {
            const dist = Math.pow(startX - targetX, 2) + Math.pow((2 * n - startY) - targetY, 2);
            minDistance = Math.min(minDistance, dist);
        }
        
        answer.push(minDistance);
    }
    
    return answer;
}