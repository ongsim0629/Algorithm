function solution(board) {
    const rows = board.length;
    const cols = board[0].length;
    const directions = [
        [0, 1],  // 오른쪽
        [1, 0],  // 아래
        [0, -1], // 왼쪽
        [-1, 0], // 위
    ];
    
    let start = null;
    let goal = null;

    // 시작 위치와 목표 위치 찾기
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === 'R') start = [i, j];
            if (board[i][j] === 'G') goal = [i, j];
        }
    }

    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const queue = [[...start, 0]]; // [row, col, moveCount]
    visited[start[0]][start[1]] = true;

    while (queue.length > 0) {
        const [currentRow, currentCol, moveCount] = queue.shift();

        if (currentRow === goal[0] && currentCol === goal[1]) {
            return moveCount; // 목표 지점 도달
        }

        for (const [dr, dc] of directions) {
            let newRow = currentRow;
            let newCol = currentCol;

            // 장애물이나 경계에 부딪힐 때까지 이동
            while (
                newRow + dr >= 0 &&
                newRow + dr < rows &&
                newCol + dc >= 0 &&
                newCol + dc < cols &&
                board[newRow + dr][newCol + dc] !== 'D'
            ) {
                newRow += dr;
                newCol += dc;
            }

            if (!visited[newRow][newCol]) {
                visited[newRow][newCol] = true;
                queue.push([newRow, newCol, moveCount + 1]);
            }
        }
    }

    return -1; // 목표 지점에 도달할 수 없음
}
