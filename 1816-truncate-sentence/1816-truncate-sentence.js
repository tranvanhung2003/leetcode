/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  s += " ";

  let index = (count = 0),
    len = s.length;

  while (index < len) {
    // console.log(s[index]);
    if (s[index] === " ") {
      ++count;
    }

    if (count === k) return s.slice(0, index);
    ++index;
  }
};

// console.log(truncateSentence("Hello how are you Contestant", 4));
