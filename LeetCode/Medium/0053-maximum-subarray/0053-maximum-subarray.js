function maxSubArray(nums) {
    let cur_sum = nums[0];
    let answer = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        cur_sum = Math.max(nums[i], cur_sum + nums[i]);
        answer = Math.max(answer, cur_sum);
    }
    
    return answer;
}