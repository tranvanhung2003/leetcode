/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  const arr = String(n)
    .split("")
    .map((val) => Number(val));

  return arr.reduce((a, b) => a * b) - arr.reduce((a, b) => a + b);
};
