/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
  return nums
    .map((val) =>
      String(val)
        .split("")
        .map((val) => +val)
        .reduce((a, b) => a + b)
    )
    .reduce((total, val) => (val < total ? val : total));
};
