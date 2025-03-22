/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  let count = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    let x = nums[i];
    nums.includes(x + diff, i + 1) && nums.includes(x + 2 * diff, i + 2)
      ? ++count
      : undefined;
  }

  return count;
};
