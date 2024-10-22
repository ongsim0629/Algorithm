var threeSum = function(nums) {
    const N = nums.length;
    const sorted_nums = nums.sort((a, b) => a - b);
    let answer_set = [];
    
    for (let i = 0; i < N - 2; i++) {
        // 중복된 요소 건너뛰기
        if (i > 0 && sorted_nums[i] === sorted_nums[i - 1]) continue;
        
        const x = sorted_nums[i];
        let left = i + 1;
        let right = N - 1;
        
        while (left < right) {
            const sum = x + sorted_nums[left] + sorted_nums[right];
            
            if (sum === 0) {
                answer_set.push([x, sorted_nums[left], sorted_nums[right]]);
                
                // 중복된 값을 피하기 위해 left와 right 이동
                while (left < right && sorted_nums[left] === sorted_nums[left + 1]) left++;
                while (left < right && sorted_nums[right] === sorted_nums[right - 1]) right--;
                
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return answer_set;
};
