/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  const mang = nums.slice(0, 4).sort((a, b) => a - b);
  let min2 = mang[0],
    min = mang[1],
    max = mang[2],
    max2 = mang[3];

  for (let i = 4; i < nums.length; ++i) {
    let val = nums[i];

    if (val < min2) {
      min = min2;
      min2 = val;
    } else if (val < min) {
      min = val;
    }

    if (val > max2) {
      max = max2;
      max2 = val;
    } else if (val > max) {
      max = val;
    }
  }

  //   console.log(min2, min, max, max2);
  return max * max2 - min * min2;
};

// console.log(maxProductDifference([5, 6, 2, 7, 4]));
