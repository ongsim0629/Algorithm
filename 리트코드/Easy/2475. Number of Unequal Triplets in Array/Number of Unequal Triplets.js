var unequalTriplets = function(nums) {
    const N = nums.length;
    let count = 0;
    for (let i = 0; i < N; i++){
        for (let j = i + 1; j < N; j++){
            for (let k = i + 2; k < N; k++){
                if (nums[i] != nums[j] && nums[j] != nums[k] && nums[i] != nums[k]){
                    if(i < j && j < k){
                        count++;
                    }
                }
            }
        }
    }
    return count;
};
