/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jewelsCount = 0;
    for (let i = 0; i < stones.length; i++) {
        stone = stones[i];
        if (jewels.includes(stone)){
            jewelsCount++;
        }
    }
    return jewelsCount;
};
