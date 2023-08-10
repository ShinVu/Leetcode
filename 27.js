/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const new_nums = nums.filter((value) => value != val);
  for (let i = 0; i < new_nums.length; i++) {
    nums[i] = new_nums[i];
  }
  return new_nums.length;
};

let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;
console.log(removeElement(nums, val));
