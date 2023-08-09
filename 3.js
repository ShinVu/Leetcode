/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let hashSet = [];
  let count = 0;
  let i = 0;
  for (let j = 0; j < s.length; j++) {
    if (hashSet[s[j]] != undefined) {
      i = Math.max(i, hashSet[s[j]] + 1);
    }
    count = Math.max(count, j - i + 1);
    hashSet[s[j]] = j;
  }
  return count;
};

// let s = "";

// console.log(lengthOfLongestSubstring(s));
