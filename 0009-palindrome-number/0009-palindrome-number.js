/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const str = x.toString();
    const len = str.length;

    for (let i = 0; i <= Math.trunc(len / 2) - 1; i++) {
        if (str[i] !== str[len - i - 1]) {
            return false;
        }
    }

    return true;
};