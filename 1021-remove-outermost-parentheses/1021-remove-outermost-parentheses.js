/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let str = "";
  let left = (right = temp = 0);

  for (let idx = 0; idx < s.length; idx++) {
    s[idx] === "(" ? ++left : ++right;

    if (left === right) {
      str += s.slice(temp + 1, idx);
      temp = idx + 1;
    }
  }

  return str;
};

// console.log(removeOuterParentheses("(()())(())(()(()))"));
