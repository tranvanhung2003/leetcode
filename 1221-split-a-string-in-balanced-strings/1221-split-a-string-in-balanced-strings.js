/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let result = (left = right = 0);

  for (let val of s) {
    val === "L" ? ++left : ++right;

    if (left === right && left !== 0) {
      ++result;
      left = right = 0;
    }
  }

  return result;
};
