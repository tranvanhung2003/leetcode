/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
  nums.sort((a, b) => a - b);

  const arr = [];

  for (let i = 0; i < nums.length / 2; i++) {
    arr.push(nums[2 * i + 1], nums[2 * i]);
  }

  return arr;
};
