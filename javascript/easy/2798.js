/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let employees = 0;
    for (let i = 0; i < hours.length; i++){
        if (hours[i] >= target){
            employees++;
        }
    }
    return employees;
};
