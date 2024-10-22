var twoSum = function(nums, target) {
    let N = nums.length;
    let result = [];
    for(let i = 0; i < N; i++){
        for (let j = i+1; j < N; j++){
            if (nums[i] + nums[j] == target){
                result.push(i,j);
                return result;
            }
        }
    }
};
