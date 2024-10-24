var find132pattern = function(nums) {
    // min_stack 준비
    let min_stack = [];
    
    let min = nums[0];
    for (let i = 0; i < nums.length; i++){
        if(min > nums[i]){
            min = nums[i];
        }
        min_stack.push(min);
    }
    
    // 비교 시작
    let mid_stack = [];
    for(let i = nums.length - 1; i >= 0; i--){
        if (nums[i] > min_stack[i]){
            while(0 < mid_stack.length && mid_stack[mid_stack.length-1] <= min_stack[i]){
                mid_stack.pop();
            }
            
            if (0 < mid_stack.length && mid_stack[mid_stack.length -1] < nums[i]){
                return true;
            }
            
            mid_stack.push(nums[i]);
        }
    }
    return false;
};
