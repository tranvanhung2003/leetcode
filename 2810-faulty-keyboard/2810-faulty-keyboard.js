/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
  let res = "";

  for (let val of s) {
    if (val === "i") {
      res = res.split("").reverse().join("");

      continue;
    }

    res += val;
  }

  return res;
};
