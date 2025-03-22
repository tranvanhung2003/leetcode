/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  let min = Infinity;

  for (let i = 0; i < len / 2; i++) {
    if (min > nums[i] + nums[len - 1 - i]) {
      min = nums[i] + nums[len - 1 - i];
    }
  }

  return min / 2;
};
