/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  return function () {
    const number = n;
    n += 1;
    return number;
  };
};

// const counter = createCounter(10);

// console.log(counter());
// console.log(counter());
// console.log(counter());
