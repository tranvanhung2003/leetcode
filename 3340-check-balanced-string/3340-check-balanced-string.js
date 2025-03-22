/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function (num) {
  const arr = [0, 0];

  for (i = 0; i < num.length; i++) {
    arr[i % 2] += +num[i];
  }

  return arr[0] === arr[1];
};
