/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  const len = arr.length;

  for (let i = 0; i < len; ++i) {
    sum += arr[i];
    let tong = arr[i];

    for (let j = i + 2; j < len; j += 2) {
      tong += arr[j - 1] + arr[j];
      sum += tong;
    }
  }

  return sum;
};
