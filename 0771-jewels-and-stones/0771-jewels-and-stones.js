/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const set = new Set(jewels.split(""));

  stones = stones.split("");
  return stones.reduce((total, val) => (set.has(val) ? ++total : total), 0);
};
