/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set(nums);
    const answer = !(JSON.stringify([...set]) === JSON.stringify(nums));

    return answer;
};