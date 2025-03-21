/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  return sentences.reduce(
    (max, currVal) =>
      currVal.split(" ").length > max ? currVal.split(" ").length : max,
    0
  );
};
