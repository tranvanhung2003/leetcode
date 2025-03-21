/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (a, b) {
  a = a.toString(2);
  b = b.toString(2);

  if (a.length < b.length) {
    a = a.padStart(b.length, "0");
  } else if (a.length > b.length) {
    b = b.padStart(a.length, "0");
  }

  return String(a)
    .split("")
    .reduce(
      (prevVal, currVal, currIdx, arr) =>
        currVal !== b[currIdx] ? prevVal + 1 : prevVal,
      0
    );
};
