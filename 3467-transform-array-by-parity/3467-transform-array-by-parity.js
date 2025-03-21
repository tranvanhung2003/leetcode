/**
 * @param {number[]} nums
 * @return {number[]}
 */
 
var transformArray = function (nums) {
  let count = 0;

  nums.forEach((val) => {
    if (val % 2 === 0) {
      ++count;
    }
  });

  return Array(count)
    .fill(0)
    .concat(Array(nums.length - count).fill(1));
};
