/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  const len = mat.length;

  let sum = len % 2 === 0 ? 0 : -mat[(len - 1) / 2][(len - 1) / 2];

  for (let i = 0; i < len; ++i) {
    sum += mat[i][i] + mat[len - 1 - i][i];
    console.log(sum);
  }

  return sum;
};

// console.log(
//   diagonalSum([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
