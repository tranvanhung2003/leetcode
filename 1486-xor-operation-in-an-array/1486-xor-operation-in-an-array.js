/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
    return new Array(n).fill().map((_, idx) => start + 2 * idx).reduce((a, b) => a ^ b);
};