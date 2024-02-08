/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let indices = [];
    for (let i in words){
        if (words[i].includes(x)){
            indices.push(i);
        }
    }
    return indices;
};
