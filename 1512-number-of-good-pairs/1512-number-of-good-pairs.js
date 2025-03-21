/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const map = new Map();
  let total = 0;

  nums.forEach((value, index, array) => {
    if (map.has(value)) {
      total += map.get(value);
      map.set(value, map.get(value) + 1);
    } else {
      map.set(value, 1);
    }
  }, 0);

  return total;
};
