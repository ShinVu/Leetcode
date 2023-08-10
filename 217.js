/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let set = [];
  for (const num of nums) {
    if (set[num]) {
      return true;
    } else {
      set[num] = true;
    }
  }
  return false;
};
