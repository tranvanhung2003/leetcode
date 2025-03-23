/**
 * @param {number[][]} grid
 */
var NeighborSum = function (grid) {
  this.grid = grid;
  this.flat = grid.flat();
  this.n = grid.length;
};

/**
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.adjacentSum = function (value) {
  value = this.flat.indexOf(value);
  let [i, j] = [Math.trunc(value / this.n), value % this.n];

  return (
    (i > 0 ? this.grid[i - 1][j] : 0) +
    (i < this.n - 1 ? this.grid[i + 1][j] : 0) +
    (j > 0 ? this.grid[i][j - 1] : 0) +
    (j < this.n - 1 ? this.grid[i][j + 1] : 0)
  );
};

/**
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.diagonalSum = function (value) {
  value = this.flat.indexOf(value);
  let [i, j] = [Math.trunc(value / this.n), value % this.n];

  return (
    (i > 0 && j > 0 ? this.grid[i - 1][j - 1] : 0) +
    (i > 0 && j < this.n - 1 ? this.grid[i - 1][j + 1] : 0) +
    (i < this.n - 1 && j > 0 ? this.grid[i + 1][j - 1] : 0) +
    (i < this.n - 1 && j < this.n - 1 ? this.grid[i + 1][j + 1] : 0)
  );
};

/**
 * Your NeighborSum object will be instantiated and called as such:
 * var obj = new NeighborSum(grid)
 * var param_1 = obj.adjacentSum(value)
 * var param_2 = obj.diagonalSum(value)
 */
