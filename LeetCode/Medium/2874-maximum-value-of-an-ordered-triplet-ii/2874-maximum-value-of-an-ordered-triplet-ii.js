/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    let prefix = [];
    let suffix = [];
    let max = 0;
    
    let premax = 0;
    for (let i = 0; i < nums.length; i++){
        if (premax<nums[i]){
            premax = nums[i];
        }
        prefix[i] = premax;
    }
    
    let sufmax = 0;
    for (let i = nums.length-1; i > -1; i--){   
        if (sufmax < nums[i]){
            sufmax = nums[i];
        }
        suffix[i] = sufmax;
    }
    
    for (let i = 1; i < nums.length-1; i++){
        let tmp = (prefix[i-1]-nums[i])*suffix[i+1];
        max = Math.max(max, (prefix[i-1]-nums[i])*suffix[i+1]);  
        }
    
    return max;
};