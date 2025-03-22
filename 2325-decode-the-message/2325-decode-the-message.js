/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  const map = new Map();
  let temp = "a".charCodeAt(0);
  map.set(" ", " ");

  for (val in key) {
    if (!map.has(val)) {
      map.set(val, String.fromCharCode(temp));
      ++temp;
    }
  }

  return message
    .split("")
    .map((val) => map.get(val))
    .join("");
};
/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  const map = new Map();
  let temp = "a".charCodeAt(0);
  map.set(" ", " ");

  for (val of key) {
    if (!map.has(val)) {
      map.set(val, String.fromCharCode(temp));
      // console.log(map.get(val));
      ++temp;
    }
  }

  return message
    .split("")
    .map((val) => map.get(val))
    .join("");
};

// console.log(
//   decodeMessage(
//     "the quick brown fox jumps over the lazy dog",
//     "vkbs bs t suepuv"
//   )
// );
