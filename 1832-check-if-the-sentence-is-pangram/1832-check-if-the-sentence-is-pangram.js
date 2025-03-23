/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  const dau = "a".charCodeAt(0),
    cuoi = "z".charCodeAt(0),
    set = new Set();

  for (let i = dau; i < cuoi; ++i) {
    set.add(String.fromCharCode(i));
  }

  for (let val of sentence) {
    set.delete(val);
  }

  return set.size === 0;
};
