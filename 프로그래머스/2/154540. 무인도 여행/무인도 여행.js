function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const result = [];

    const isInBounds = (x, y) => x >= 0 && x < rows && y >= 0 && y < cols;

    const bfs = (x, y) => {
        let queue = [[x, y]];
        visited[x][y] = true;
        let sum = 0;

        while (queue.length > 0) {
            const [cx, cy] = queue.shift();
            sum += parseInt(maps[cx][cy]);

            for (const [dx, dy] of directions) {
                const nx = cx + dx;
                const ny = cy + dy;

                if (isInBounds(nx, ny) && !visited[nx][ny] && maps[nx][ny] !== 'X') {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                }
            }
        }
        return sum;
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (!visited[i][j] && maps[i][j] !== 'X') {
                result.push(bfs(i, j));
            }
        }
    }

    return result.length > 0 ? result.sort((a, b) => a - b) : [-1];
}
