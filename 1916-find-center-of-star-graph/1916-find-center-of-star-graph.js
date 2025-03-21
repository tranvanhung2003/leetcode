/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  return edges[0].includes(edges[1][0]) ? edges[1][0] : edges[1][1];
};
