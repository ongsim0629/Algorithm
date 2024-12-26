function solution(diffs, times, limit) {
    let left = diffs[0];
    let right = 100000;
    let answer = right;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let total_time = 0;
        let time_prev = 0;
        
        // 퍼즐 풀기
        for (let i = 0; i < diffs.length; i++) { 
            if (diffs[i] <= mid) {
                total_time += times[i];
            } else {
                total_time += (times[i] + time_prev) * (diffs[i] - mid) + times[i];
            }

            if (total_time > limit) break;
            time_prev = times[i];
        }
        
        // 숙련도의 범위 조절
        if (total_time <= limit) {
            answer = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return answer;
}