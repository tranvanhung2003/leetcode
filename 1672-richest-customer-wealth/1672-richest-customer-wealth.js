/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  return accounts.reduce((total, val) => {
    let sum = val.reduce((total, val) => total + val, 0);

    return total < sum ? sum : total;
  }, 0);
};
