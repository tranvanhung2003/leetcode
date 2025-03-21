var buildArray = function (nums) {
  return nums.reduce((total, _, index, nums) => {
    total.push(nums[nums[index]]);
    return total;
  }, []);
};
