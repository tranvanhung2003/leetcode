/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function (n, commands) {
  let i = (j = 0);

  commands.forEach((val) => {
    switch (val) {
      case "UP":
        --i;
        break;
      case "DOWN":
        ++i;
        break;
      case "LEFT":
        --j;
        break;
      default:
        ++j;
        break;
    }
  });

  return i * n + j;
};
