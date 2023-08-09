/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let result = 0;
  let i = 0;
  while (i < s.length) {
    switch (s[i]) {
      case "I":
        if (s[i + 1] === "V") {
          result += 4;
          i += 2;
        } else if (s[i + 1] === "X") {
          result += 9;
          i += 2;
        } else {
          result += 1;
          i += 1;
        }
        break;
      case "V":
        result += 5;
        i += 1;
        break;
      case "X":
        if (s[i + 1] === "L") {
          result += 40;
          i += 2;
        } else if (s[i + 1] === "C") {
          result += 90;
          i += 2;
        } else {
          result += 10;
          i += 1;
        }
        break;
      case "L":
        result += 50;
        i += 1;
        break;
      case "C":
        if (s[i + 1] === "D") {
          result += 400;
          i += 2;
        } else if (s[i + 1] === "M") {
          result += 900;
          i += 2;
        } else {
          result += 100;
          i += 1;
        }
        break;
      case "D":
        result += 500;
        i += 1;
        break;
      case "M":
        result += 1000;
        i += 1;
        break;
    }
  }
  return result;
};
