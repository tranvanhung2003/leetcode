/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
  if (words.length !== s.length) return false;

  return s === words.map((val) => val[0]).join("");
};
