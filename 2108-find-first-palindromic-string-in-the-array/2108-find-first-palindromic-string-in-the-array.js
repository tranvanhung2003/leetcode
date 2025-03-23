/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  function check(word) {
    const cuoi = word.length - 1;
    const len = Math.trunc(word.length / 2);
    for (let i = 0; i < len; ++i) {
      if (word[i] !== word[cuoi - i]) {
        return false;
      }
    }

    return true;
  }

  for (let val of words) {
    if (check(val)) {
      return val;
    }
  }

  return "";
};
