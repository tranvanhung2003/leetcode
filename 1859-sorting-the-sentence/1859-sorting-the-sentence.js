/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  s = s.split(" ").sort((a, b) => a.at(-1).localeCompare(b.at(-1)));

  return s.map((val) => val.slice(0, val.length - 1)).join(" ");
};
