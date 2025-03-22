/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {
  let sum = 0,
    arr = [3, 5, 7];
  for (let i = 1; i <= n; i++) {
    arr.some((val) => i % val === 0) ? (sum += i) : undefined;
  }

  return sum;
};
