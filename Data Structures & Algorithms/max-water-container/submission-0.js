class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let start = 0, end = heights.length - 1;

        while (start < end) {
            const height1 = heights[start];
            const height2 = heights[end];

            maxArea = Math.max(maxArea, (end - start) * Math.min(height1, height2));
            if (height1 < height2) {
                start++;
            }
            else {
                end--;
            }
        }

        return maxArea;
    }
}
