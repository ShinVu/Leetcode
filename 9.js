/**
 * @param {number} x
 * @return {boolean}
 */

// Convert to string
// var isPalindrome = function (x) {
//   if (x < 0) {
//     return false;
//   }
//   const reversed_x = Number(x.toString().split("").reverse().join(""));
//   return x === reversed_x;
// };

// Math
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let reversed_x = 0;
  let temp_x = x;
  while (temp_x > 0) {
    let i = temp_x % 10;
    temp_x = Math.floor(temp_x / 10);
    reversed_x = reversed_x * 10 + i;
  }
  return x === reversed_x;
};
