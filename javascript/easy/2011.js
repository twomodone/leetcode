/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x = 0;
    for (let i in operations){
        if (operations[i][1] === "-"){
            x--;
        } else {
            x++;
        }
    }
    return x;
};
