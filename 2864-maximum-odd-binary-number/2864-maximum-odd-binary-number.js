/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
  let khong = (mot = 0);

  for (let val of s) {
    val === "0" ? ++khong : ++mot;
  }

  return "1".repeat(mot - 1) + "0".repeat(khong) + "1";
};
