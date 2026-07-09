class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const prefix = Array.from({ length: height.length }).fill(0);
        const suffix = Array.from({ length: height.length }).fill(0);

        let max = 0;

        for (let i = 0; i < height.length; i++) {
            prefix[i] = max;
            max = Math.max(height[i], max);
        }

        max = 0;

        for (let j = height.length - 1; j >= 0; j--) {
            suffix[j] = max;
            max = Math.max(max, height[j]);
        }

        let totalWaterAreaTrapped = 0;

        for (let i = 0; i < height.length; i++) {
            totalWaterAreaTrapped += Math.max(Math.min(prefix[i], suffix[i]) - height[i], 0);
        }

        return totalWaterAreaTrapped;
    }
}
