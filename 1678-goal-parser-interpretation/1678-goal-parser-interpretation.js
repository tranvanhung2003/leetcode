/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  return command.split("").reduce((prevVal, currVal, currIdx, arr) => {
    switch (currVal) {
      case "G":
        prevVal += "G";
        break;
      case "(":
        prevVal += arr[currIdx + 1] === ")" ? "o" : "al";
        break;
      default:
        break;
    }

    return prevVal;
  }, "");
};
