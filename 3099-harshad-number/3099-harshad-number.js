/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x) {
  const sum = String(x)
    .split("")
    .map((val) => +val)
    .reduce((a, b) => a + b);

  return x % sum === 0 ? sum : -1;
};
