/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let shuffledArray = [];
    for (let i = 0, j = n; i < n; i++, j++){
        shuffledArray.push(nums[i]);
        shuffledArray.push(nums[j]);
    }
    return shuffledArray;
};
