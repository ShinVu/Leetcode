/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    let count = 0;
    while (nums[j] === nums[i]) {
      count += 1;
      j += 1;
    }
    nums.splice(i + 1, count);
  }
  return nums.length;
};
