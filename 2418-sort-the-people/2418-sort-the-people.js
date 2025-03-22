/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  let arr = names.map((val, idx) => [val, heights[idx]]);

  arr.sort((a, b) => b[1] - a[1]);

  return arr.map((val) => val[0]);
};
