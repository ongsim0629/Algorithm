function solution(n, m, section) {
    let count = 0;    
    let covered = 0;
    
    for (const pos of section) {
        if (pos > covered) {
            count++;
            covered = pos + m - 1; 
        }
    }
    
    return count;
}