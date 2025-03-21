/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  points = points.map((val) => val[0]);
  points.sort((a, b) => b - a);

  let max = 0;

  for (let i = 0; i < points.length - 1; i++) {
    if (points[i] - points[i + 1] > max) {
      max = points[i] - points[i + 1];
    }
  }

  return max;
};
