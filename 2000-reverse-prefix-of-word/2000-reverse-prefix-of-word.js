/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  if (!word.includes(ch)) return word;

  let str1 = word.slice(0, word.indexOf(ch) + 1);
  let str2 = word.slice(word.indexOf(ch) + 1);
  str1 = str1.split("").reverse().join("");

  return str1 + str2;
};
