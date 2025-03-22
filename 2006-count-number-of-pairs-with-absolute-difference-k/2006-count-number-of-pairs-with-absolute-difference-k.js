/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  const map = new Map();
  let count = 0;

  for (let val of nums) {
    map.has(val) ? map.set(val, map.get(val) + 1) : map.set(val, 1);
  }

  // console.log(map);

  for (let i = 0; i < nums.length - 1; i++) {
    let x = nums[i];

    if (nums.includes(x - k, i + 1)) {
      count += map.get(x - k);
    }

    if (nums.includes(x + k, i + 1)) {
      count += map.get(x + k);
    }

    map.set(nums[i], map.get(nums[i]) - 1);
  }

  return count;
};

// console.log(countKDifference([3, 2, 1, 5, 4], 2));
