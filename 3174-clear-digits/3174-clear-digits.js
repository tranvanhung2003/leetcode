/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
  function isDigit(char) {
    const charCode = char.charCodeAt(0);
    return charCode >= 48 && charCode <= 57;
  }

  const set = new Set();

  function check(temp) {
    --temp;

    while (isDigit(s[temp]) || set.has(temp)) {
      --temp;
    }

    set.add(temp);
  }

  for (let idx in s) {
    if (isDigit(s[idx])) {
      check(idx);
    }
  }

  return s
    .split("")
    .filter((val, idx) => !isDigit(val) && !set.has(idx))
    .join("");
};
