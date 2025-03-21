/**
 * @param {string} date
 * @return {string}
 */

var convertDateToBinary = function (date) {
  return date
    .split("-")
    .map((val) => (+val).toString(2))
    .join("-");
};
