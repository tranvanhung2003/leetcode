/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  s = s.split("");
  indices = indices.map((val, idx) => [val, s[idx]]);
  indices.sort((a, b) => a[0] - b[0]);

  return indices.map((val) => val[1]).join("");
};
