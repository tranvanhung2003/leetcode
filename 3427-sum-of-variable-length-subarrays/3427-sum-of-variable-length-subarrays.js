/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function (nums) {
  function sum(arr) {
    return arr.reduce((total, val) => total + val, 0);
  }

  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result += sum(nums.slice(i - nums[i] > 0 ? i - nums[i] : 0, i + 1));
  }

  return result;
};
