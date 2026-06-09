class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const result = Array(temperatures.length).fill(0);

        temperatures.forEach((temp, index) => {
            while (
                stack.length > 0 &&
                temp > temperatures[stack[stack.length - 1]]
            ) {
                const prevIndex = stack.pop();
                result[prevIndex] = index - prevIndex;
            }

            stack.push(index);
        });

        return result;
    }
}
