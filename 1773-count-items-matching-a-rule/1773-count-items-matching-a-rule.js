/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let idx;

  switch (ruleKey) {
    case "type":
      idx = 0;
      break;
    case "color":
      idx = 1;
      break;
    default:
      idx = 2;
      break;
  }

  return items.reduce(
    (total, val) => (val[idx] === ruleValue ? ++total : total),
    0
  );
};
