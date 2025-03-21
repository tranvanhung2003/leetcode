/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  let arr = String(num)
    .split("")
    .map((val) => Number(val))
    .sort((a, b) => a - b);

  return (arr[0] + arr[1]) * 10 + arr[2] + arr[3];
};
