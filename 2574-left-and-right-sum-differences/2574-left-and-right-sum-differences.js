/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
  let tong = nums.reduce((a, b) => a + b, 0);

  let leftArr = [],
    rightArr = [];
  let left = 0,
    right = tong;

  nums.forEach((_, idx, arr) => {
    leftArr.push((left += arr[idx - 1] === undefined ? 0 : arr[idx - 1]));
    rightArr.push((right -= arr[idx]));
  });

  return leftArr.map((val, idx) => Math.abs(val - rightArr[idx]));
};

console.log(leftRightDifference([10, 4, 8, 3]));
