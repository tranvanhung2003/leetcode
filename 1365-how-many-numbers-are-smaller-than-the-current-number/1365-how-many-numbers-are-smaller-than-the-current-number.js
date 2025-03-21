/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const arr = [...nums];
  arr.sort((a, b) => a - b);

  return nums.map((val) => arr.indexOf(val));
};
