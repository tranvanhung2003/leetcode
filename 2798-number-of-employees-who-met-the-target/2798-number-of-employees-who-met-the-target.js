/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function (hours, target) {
  return hours.reduce(
    (prevVal, currVal) => (currVal >= target ? prevVal + 1 : prevVal),
    0
  );
};
