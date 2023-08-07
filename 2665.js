/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  const initial_number = init;
  const increment = function () {
    init += 1;
    return init;
  };
  const decrement = function () {
    init -= 1;
    return init;
  };
  const reset = function () {
    init = initial_number;
    return init;
  };
  return { increment, decrement, reset };
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
