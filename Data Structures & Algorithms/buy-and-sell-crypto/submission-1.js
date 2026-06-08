class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let lowestPrice = -1;
        let maxProfit = 0;

        for(let i = 0; i < prices.length; i++) {
            if (lowestPrice !== -1) {
                maxProfit = Math.max(maxProfit, prices[i] - lowestPrice);
                lowestPrice = Math.min(lowestPrice, prices[i]);
            }
            else {
                lowestPrice = prices[i];
            }

        }

        return maxProfit;
    }
}
