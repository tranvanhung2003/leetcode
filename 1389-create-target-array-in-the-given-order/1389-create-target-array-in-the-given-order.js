/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  const arr = [];

  for (let idx in nums) {
    arr.splice(index[idx], 0, nums[idx]);
  }

  return arr;
};
