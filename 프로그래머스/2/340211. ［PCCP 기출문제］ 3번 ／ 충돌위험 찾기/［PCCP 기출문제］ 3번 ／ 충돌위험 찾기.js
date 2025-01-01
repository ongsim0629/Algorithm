function solution(points, routes) {
    const robotCount = routes.length;
    const pathLength = routes[0].length;
    let dangerCount = 0;
    
    const robotPaths = [];
    
    for (let robotId = 0; robotId < robotCount; robotId++) {
        const path = [];
        let currentTime = 0;
        

        for (let i = 0; i < pathLength - 1; i++) {
            const start = points[routes[robotId][i] - 1];
            const end = points[routes[robotId][i + 1] - 1];
            
            let currentR = start[0];
            let currentC = start[1];
            
            if (i === 0) {
                path.push({ pos: [currentR, currentC], time: currentTime });
            }
            
            // 다음 위치로 이동하면서 모든 중간 지점 기록
            while (currentR !== end[0] || currentC !== end[1]) {
                currentTime++;
                
                // r 좌표 먼저 이동
                if (currentR < end[0]) currentR++;
                else if (currentR > end[0]) currentR--;
                // 그 다음 c 좌표 이동
                else if (currentC < end[1]) currentC++;
                else if (currentC > end[1]) currentC--;
                
                path.push({ pos: [currentR, currentC], time: currentTime });
            }
        }
        
        robotPaths.push(path);
    }
    
    const timePositions = new Map();
    
    robotPaths.forEach((path, robotId) => {
        path.forEach(({ pos, time }) => {
            const posKey = pos.join(',');
            
            if (!timePositions.has(time)) {
                timePositions.set(time, new Map());
            }
            
            const positionsAtTime = timePositions.get(time);
            positionsAtTime.set(posKey, (positionsAtTime.get(posKey) || 0) + 1);
        });
    });
    
    timePositions.forEach((positions) => {
        positions.forEach((count) => {
            if (count > 1) {
                dangerCount++;
            }
        });
    });
    
    return dangerCount;
}