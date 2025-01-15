function solution(land) {
    let row = land.length;
    let col = land[0].length;
    
    let visited = Array.from({length: row}, () => Array(col).fill(0));

    let result = Array(col).fill(0);
    let dx = [-1,0,1,0];
    let dy = [0,1,0,-1];
    
    for(let i = 0; i < row; ++i) {
        for(let j = 0; j < col; ++j) {
            
            if(!visited[i][j] && land[i][j]) {
                let cols = new Set();
                let count = 1;
                let q = [[i,j]];
                
                while(q.length) {
                    const [x,y] = q.shift();
                    visited[x][y] = 1;
                    cols.add(y);
                    
                    for(let k = 0; k < 4; ++k) {
                        let moveX = dx[k] + x;
                        let moveY = dy[k] + y;
                        
                        if(moveX >= 0 && moveX < row && moveY >= 0 && moveY < col) {
                            if(land[moveX][moveY] && !visited[moveX][moveY]) {
                                visited[moveX][moveY] = 1;
                                q.push([moveX,moveY]);
                                count++;
                            }
                        }
                    }
                }
                for(const col of cols) {
                    result[col] += count; 
                }
            }
            
        }
    }
    
    return Math.max(...result);
}