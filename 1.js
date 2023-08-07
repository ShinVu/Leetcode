/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hashSet = [];
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    if (hashSet[target - value] >= 0) {
      return [hashSet[target - value], i];
    } else {
      hashSet[value] = i;
    }
  }
};

const num = [3, 3];
console.log(twoSum(num, 6));
