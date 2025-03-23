/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  let count = 0,
    flag = true;
  for (let val of s) {
    if (val === "|") {
      flag = !flag;
    }

    if (val === "*" && flag) {
      ++count;
    }
  }

  return count;
};
