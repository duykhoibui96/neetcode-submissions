class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        if (heights.length === 1) {
            return heights[0];
        }

        let maxArea = 0;
        const stack = [];

        // Add a sentinel bar to flush the stack
        heights.push(0);

        for (let i = 0; i < heights.length; i++) {

            while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
                const height = heights[stack.pop()];

                const width = stack.length
                    ? i - stack[stack.length - 1] - 1
                    : i;

                maxArea = Math.max(maxArea, height * width);
            }

            stack.push(i);
        }

        heights.pop(); // Optional: restore original array

        return maxArea;
    }
}

