/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  return words.reduce(
    (total, val) => (val.startsWith(pref) ? ++total : total),
    0
  );
};
