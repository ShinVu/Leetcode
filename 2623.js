/**
 * @param {Function} fn
 */
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    console.log(key);
    if (cache.hasOwnProperty(key)) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(2, 3);
memoizedFn(2, 3);
console.log(callCount); // 1
