/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const target = 0;
  const result = [];
  nums.sort(function (a, b) {
    return a - b;
  });
  let i = 0;
  while (i < nums.length - 2) {
    let start = i;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[start] + nums[left] + nums[right];
      if (sum === target) {
        result.push([nums[start], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) {
          left += 1;
        }
        while (nums[right] === nums[right - 1]) {
          right -= 1;
        }
        left += 1;
        right -= 1;
      } else if (sum < target) {
        left += 1;
      } else if (sum > target) {
        right -= 1;
      }
    }
    while (nums[i] === nums[i + 1]) {
      i++;
    }
    i++;
  }
  return result;
};
