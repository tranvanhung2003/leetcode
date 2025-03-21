"use strict";
var scoreOfString = function (s) {
    let sum = 0;
    s.split("").forEach((value, index, array) => {
        if (index === array.length - 1) {
            return;
        }
        sum += Math.abs(array[index].charCodeAt(0) - array[index + 1].charCodeAt(0));
    });
    return sum;
};