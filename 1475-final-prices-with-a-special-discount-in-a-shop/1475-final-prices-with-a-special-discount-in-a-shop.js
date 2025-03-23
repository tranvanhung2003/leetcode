/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  const len = prices.length;

  function find(idx) {
    for (let i = idx + 1; i < len; ++i) {
      if (prices[i] <= prices[idx]) {
        return prices[idx] - prices[i];
      }
    }

    return undefined;
  }

  return prices.map((val, idx) => find(idx) ?? val);
};
