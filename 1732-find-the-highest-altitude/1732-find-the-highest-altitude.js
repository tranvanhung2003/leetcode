/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let max = -Infinity,
    sum = 0;

  for (let val of gain) {
    sum += val;

    if (max < sum) {
      max = sum;
    }
  }

  return max > 0 ? max : 0;
};
