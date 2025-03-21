/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  const arr = [];

  for (let i = 0; i < nums.length / 2; i++) {
    arr.push(...new Array(nums[2 * i]).fill(nums[2 * i + 1]));
  }

  return arr;
};
