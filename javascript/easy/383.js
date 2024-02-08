/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let letters = {};

    for (let i in magazine){
        if(magazine[i] in letters){
            letters[magazine[i]] += 1;
        } else letters[magazine[i]] = 1;
    }

    for (let i in ransomNote){
        if (ransomNote[i] in letters){
            if (letters[ransomNote[i]] === 0){
                return false;
            } else {
                letters[ransomNote[i]] -= 1;
            }
        } else {
            return false;
        }
    }
    return true;
};
