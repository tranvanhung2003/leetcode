/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
function chiaHet(a, b) {
  return Math.trunc(a / b) === a / b ? true : false;
}

var differenceOfSums = function (n, m) {
  let num1 = (num2 = 0);

  for (let i = 1; i <= n; i++) {
    if (chiaHet(i, m)) {
      num2 += i;
    } else {
      num1 += i;
    }
  }

  return num1 - num2;
};
