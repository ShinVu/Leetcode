/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  let arr = [];
  const dict = {
    "]": "[",
    "}": "{",
    ")": "(",
  };
  for (const value of s) {
    if (value === "(" || value === "{" || value === "[") {
      arr.push(value);
    } else if (
      dict.hasOwnProperty(value) &&
      arr[arr.length - 1] === dict[value]
    ) {
      arr.pop();
    } else {
      return false;
    }
  }
  return arr.length === 0;
};
const result = isValid("(]");
console.log(result);
