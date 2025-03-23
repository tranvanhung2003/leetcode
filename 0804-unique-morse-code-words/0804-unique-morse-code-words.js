/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const set = new Set(),
    map = new Map();
  const morse = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  const a = "a".charCodeAt(0);

  for (let i = 0; i < 26; ++i) {
    map.set(String.fromCharCode(a + i), morse[i]);
  }

  words.forEach((val, idx) =>
    set.add(
      val
        .split("")
        .map((val) => map.get(val))
        .join("")
    )
  );

  return set.size;
};
