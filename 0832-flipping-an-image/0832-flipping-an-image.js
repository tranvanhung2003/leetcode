/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  return image.map((val) => val.reverse().map((val) => 1 - val));
};
