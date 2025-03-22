/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  let arr = String(num).split("");
  arr = arr.map((val) => +val);

  return arr.reduce((total, val) => (num % val === 0 ? ++total : total), 0);
};
