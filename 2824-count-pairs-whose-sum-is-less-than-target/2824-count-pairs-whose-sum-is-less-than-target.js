/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
  nums.sort((a, b) => a - b);

  let left = 0,
    right = nums.length - 1,
    sum = 0;

  while (left < right) {
    if (nums[left] + nums[right] < target) {
      sum += right - left;

      ++left;
    } else {
      --right;
    }
  }

  return sum;
};
