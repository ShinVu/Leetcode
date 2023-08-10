/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function (strs) {
//   let longest_prefix = "";
//   let counter = 0;
//   let min_length = Math.min(...strs.map((str) => str.length));
//   while (counter < min_length) {
//     let value = strs[0][counter];
//     for (let i = 1; i < strs.length; i++) {
//       if (value != strs[i][counter]) {
//         value = null;
//         break;
//       }
//     }
//     if (value === null) {
//       return longest_prefix;
//     } else {
//       longest_prefix += value;
//     }
//     counter += 1;
//   }
//   return longest_prefix;
// };

var longestCommonPrefix = function (strs) {
  let longest_prefix = "";
  let min_length = Math.min(...strs.map((str) => str.length));
  for (let i = 0; i < min_length; i++) {
    let char = strs[0][i];
    if (strs.every((str) => str[i] === char)) {
      longest_prefix += char;
    } else {
      break;
    }
  }
  return longest_prefix;
};
