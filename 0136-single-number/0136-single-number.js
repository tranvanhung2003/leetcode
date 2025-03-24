/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const set = new Set();

  for (val of nums) {
    if (set.has(val)) {
      set.delete(val);
    } else {
      set.add(val);
    }
  }

  return [...set][0];
};
