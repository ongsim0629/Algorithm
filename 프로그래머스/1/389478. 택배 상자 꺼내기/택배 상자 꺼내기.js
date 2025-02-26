function solution(n, w, num) {
    // 상자의 실제 물리적 위치를 저장할 2D 배열 (행, 열)
    // 0은 상자가 없는 위치를 의미
    const physicalWarehouse = [];
    let currentNum = 1;
    
    // 창고의 층 수 계산 (올림)
    const totalRows = Math.ceil(n / w);
    
    // 물리적 창고 배열 초기화 (모든 위치를 0으로)
    for (let r = 0; r < totalRows; r++) {
        physicalWarehouse.push(new Array(w).fill(0));
    }
    
    // 상자 배치 - 지그재그 패턴으로
    for (let r = 0; r < totalRows && currentNum <= n; r++) {
        const rowSize = Math.min(w, n - currentNum + 1);
        
        if (r % 2 === 0) {
            // 왼쪽에서 오른쪽
            for (let c = 0; c < rowSize; c++) {
                physicalWarehouse[r][c] = currentNum++;
            }
        } else {
            // 오른쪽에서 왼쪽
            for (let c = 0; c < rowSize; c++) {
                physicalWarehouse[r][w - 1 - c] = currentNum++;
            }
        }
    }
    
    // num이 있는 위치 찾기
    let targetRow = -1;
    let targetCol = -1;
    
    for (let r = 0; r < physicalWarehouse.length; r++) {
        for (let c = 0; c < physicalWarehouse[r].length; c++) {
            if (physicalWarehouse[r][c] === num) {
                targetRow = r;
                targetCol = c;
                break;
            }
        }
        if (targetRow !== -1) break;
    }
    
    // 꺼내야 하는 상자 계산 (타겟 포함)
    let count = 1; // 타겟 상자 자체
    
    // 타겟 상자 위의 모든
    for (let r = targetRow + 1; r < physicalWarehouse.length; r++) {
        if (physicalWarehouse[r][targetCol] !== 0) {
            count++;
        }
    }
    
    return count;
}