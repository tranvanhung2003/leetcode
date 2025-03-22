/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  return Math.abs(
    nums.reduce((a, b) => a + b) -
      nums
        .reduce((total, val) => total + String(val), "")
        .split("")
        .map((val) => +val)
        .reduce((a, b) => a + b)
  );
};
