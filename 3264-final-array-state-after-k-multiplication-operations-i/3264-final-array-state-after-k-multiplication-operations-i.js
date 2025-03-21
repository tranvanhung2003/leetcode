/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {
  let indexMin = function () {
    return nums.reduce(
      (prevVal, currVal, currIdx, arr) =>
        arr[currIdx] < arr[prevVal] ? currIdx : prevVal,
      0
    );
  };
  while (k--) {
    nums[indexMin()] *= multiplier;
  }

  return nums;
};
