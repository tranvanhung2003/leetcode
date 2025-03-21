/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
  function check(val) {
    return (
      val
        .toString(2)
        .split("")
        .reduce((total, val) => (val === "1" ? ++total : total), 0) === k
    );
  }

  return nums.reduce(
    (total, val, idx) => (check(idx) ? total + val : total),
    0
  );
};

// sumIndicesWithKSetBits([5, 10, 1, 5, 2], 1);
