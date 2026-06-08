class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const prefix = Array(height.length).fill(0);
        const suffix = Array(height.length).fill(0);

        let max = 0;
        for (let i = 0; i < height.length; i++) {
            prefix[i] = max;
            max = Math.max(max, height[i]);
        }

        max = 0;
        for(let i = height.length - 1; i >= 0; i--) {
            suffix[i] = max;
            max = Math.max(max, height[i]);
        }

        return height.reduce((total, _, index) => {
            return total + Math.max((Math.min(prefix[index], suffix[index]) - height[index]), 0);
        }, 0);
    }
}
