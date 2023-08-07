/**
 * @param {Function[]} functions
 * @return {Function}
 */
// Solution 1
// var compose = function (functions) {
//   return function (x) {
//     let result = x;
//     for (let i = functions.length - 1; i >= 0; i--) {
//       result = functions[i](result);
//     }
//     return result;
//   };
// };
// Solution 2
// var compose = function (functions) {
//   return function (x) {
//     return functions.reduceRight((acc, value) => value(acc), x);
//   };
// };
const fn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
console.log(fn(4));
