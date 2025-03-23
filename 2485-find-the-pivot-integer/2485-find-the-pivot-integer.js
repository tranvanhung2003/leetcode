/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  let dau = 0,
    cuoi = ((1 + n) * n) / 2;

  for (let i = 1; i <= n; ++i) {
    dau += i;
    cuoi -= i - 1;

    if (dau === cuoi) return i;
  }

  return -1;
};
