/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  return nums.reduce((prevVal, currVal) => {
    prevVal.push((prevVal.at(-1) ?? 0) + currVal);

    return prevVal;
  }, []);
};
