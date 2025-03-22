/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let max = (curr = 0);

  for (let val of s) {
    if (val === "(") {
      ++curr;

      if (max < curr) {
        max = curr;
      }
    } else if (val === ")") {
      --curr;
    }
  }

  return max;
};
