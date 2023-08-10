/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let hashSet = [];
  if (s.length !== t.length) {
    return false;
  }
  for (const char of s) {
    if (hashSet[char]) {
      hashSet[char] += 1;
    } else {
      hashSet[char] = 1;
    }
  }
  for (const char of t) {
    if (!hashSet[char]) {
      return false;
    } else {
      hashSet[char] -= 1;
    }
  }
  return true;
};
