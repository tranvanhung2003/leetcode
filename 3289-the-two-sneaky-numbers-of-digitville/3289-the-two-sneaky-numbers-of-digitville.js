/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
  const arr = [];
  const set = new Set();

  for (let i of nums) {
    if (arr.length === 2) break;

    if (set.has(i)) {
        arr.push(i);
    } else {
        set.add(i);
    }
  }

  return arr;
};
