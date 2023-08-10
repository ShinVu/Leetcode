/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0;
  let j = 0;
  let result = [];
  while (i < m && j < n) {
    if (nums1[i] <= nums2[j]) {
      result.push(nums1[i]);
      i += 1;
    } else if (nums2[j] <= nums1[i]) {
      result.push(nums2[j]);
      j += 1;
    }
  }
  while (i < m) {
    result.push(nums1[i]);
    i++;
  }
  while (j < n) {
    result.push(nums2[j]);
    j++;
  }
  for (let i = 0; i < nums1.length; i++) {
    nums1[i] = result[i];
  }
};
