/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let counter = {};

    for (let i = 0; i < nums.length; i++){
        if (nums[i] in counter){
            counter[nums[i]] += 1;
        } else {
            counter[nums[i]] = 1;
        }
    }

    let pairs = 0;

    for (let number in counter){
        let count = counter[number];
        pairs += count * (count - 1) / 2;
    }
    
    return pairs;
};
