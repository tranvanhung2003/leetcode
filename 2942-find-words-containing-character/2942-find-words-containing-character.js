/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
  const arr = [];
  "".includes;
  words.forEach((val, idx) => {
    if (val.includes(x)) {
      arr.push(idx);
    }
  });

  return arr;
};
