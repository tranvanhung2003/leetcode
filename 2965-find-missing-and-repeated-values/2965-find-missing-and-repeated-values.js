/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  const n = grid.length;
  const lyThuyet = ((1 + n ** 2) * n ** 2) / 2;
  const arr = grid.flat();
  const thucTe = arr.reduce((a, b) => a + b);
  const x = thucTe - lyThuyet;

  for (let i = 1; i <= n ** 2; ++i) {
    if (!arr.includes(i)) {
      return [i + x, i];
    }
  }
};
