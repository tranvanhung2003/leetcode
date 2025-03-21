/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  function max(grid, x, y) {
    let max = 0;
    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if (max < grid[i][j]) {
          max = grid[i][j];
        }
      }
    }

    return max;
  }

  const arr = [],
    len = grid.length - 2;

  for (let i = 0; i < len; i++) {
    const arrTemp = [];

    for (let j = 0; j < len; j++) {
      arrTemp.push(max(grid, i + 1, j + 1));
    }

    arr.push(arrTemp);
  }

  return arr;
};
