class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;

        let max = 0;

        while (left < right) {
            max = Math.max(max, (right - left) * Math.min(heights[right], heights[left]));

            if (heights[left] < heights[right]) {
                left++;
            }
            else {
                right--;
            }
        }

        return max;
    }
}
