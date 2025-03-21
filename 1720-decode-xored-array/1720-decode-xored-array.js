/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  const arr = [first];

  for (val of encoded) {
    arr.push(arr.at(-1) ^ val);
  }

  return arr;
};
