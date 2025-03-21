/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const arr = [],
    nums2 = nums.slice(n);

  for (let i = 0; i < n; i++) {
    arr.push(nums[i], nums2[i]);
  }

  return arr;
};
