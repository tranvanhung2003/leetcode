/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1, nums2) {
  const in1 = new Set(),
    in2 = new Set(),
    flag1 = new Set(),
    flag2 = new Set();
  let ans1 = (ans2 = 0);

  for (let val of nums1) {
    in1.add(val);
  }

  for (let val of nums2) {
    in2.add(val);
  }

  for (let val of nums1) {
    if (flag1.has(val)) {
      ++ans1;

      continue;
    }

    if (in2.has(val)) {
      ++ans1;
      flag1.add(val);
    }
  }

  for (let val of nums2) {
    if (flag2.has(val)) {
      ++ans2;

      continue;
    }

    if (in1.has(val)) {
      ++ans2;
      flag2.add(val);
    }
  }

  return [ans1, ans2];
};

// console.log(findIntersectionValues([2, 3, 2], [1, 2]));
