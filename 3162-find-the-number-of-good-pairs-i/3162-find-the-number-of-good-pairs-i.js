/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function (nums1, nums2, k) {
  function ch(a, b) {
    return Math.trunc(a / b) === a / b;
  }

  nums2 = nums2.map((val) => val * k);

  return nums1.reduce(
    (sum, val) => sum + nums2.filter((x) => ch(val, x)).length,
    0
  );
};
