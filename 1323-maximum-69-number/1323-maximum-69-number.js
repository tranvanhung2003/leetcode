/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  num = String(num).split("");
  //   let flag = false;
  const len = num.length;

  for (let i = 0; i < len; ++i) {
    if (num[i] === "6") {
      num.splice(i, 1, "9");
      flag = true;

      break;
    }
  }

  return +num.join("");
};

// console.log(maximum69Number(9669));
