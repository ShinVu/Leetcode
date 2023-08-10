/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min_buy = prices[0];
  let max_profit = 0;
  for (const price of prices) {
    let max_profit_if_sold_on_that_day = price - min_buy;
    if (max_profit < max_profit_if_sold_on_that_day) {
      max_profit = max_profit_if_sold_on_that_day;
    }
    if (price <= min_buy) {
      min_buy = price;
    }
  }
  return max_profit;
};
