/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const max = candies.reduce((prevVal, currVal) =>
    prevVal > currVal ? prevVal : currVal
  );

  return candies.map((val) => (val < max - extraCandies ? false : true));
};
