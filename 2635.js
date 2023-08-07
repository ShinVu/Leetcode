/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = fn(arr[i], i);
    if (result) {
      new_arr.push(arr[i]);
    }
  }
  return new_arr;
};
