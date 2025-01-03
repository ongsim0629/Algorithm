var productExceptSelf = function(nums) {
    let answer = [1];
    let left = 1;

    for (let i = 1; i < nums.length; i++){
        left *= nums[i-1];
        answer[i] = left;
    }

    let right = 1;
    for (let i = nums.length-1; i > -1; i--){
        answer[i] *= right;
        right *= nums[i];
    }
    return answer;
};