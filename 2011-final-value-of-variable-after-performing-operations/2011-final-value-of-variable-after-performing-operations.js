/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  operations = operations.map((value) => {
    switch (value) {
      case "++X":
      case "X++":
        return 1;
      case "--X":
      case "X--":
        return -1;
      default:
        return;
    }
  });

  return operations.reduce((total, value) => (total += value), 0);
};
