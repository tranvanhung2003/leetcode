function ucln(a, b) {
  while (b > 0) {
    [a, b] = [b, a % b];
  }

  return a;
}

/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
    return 2 * n / ucln(2, n);
};
