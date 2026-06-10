class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];

        function dfs(index, remaining, combination) {
            if (remaining === 0) {
                result.push([...combination]);
                return;
            }

            if (remaining < 0 || index === nums.length) {
                return;
            }

            combination.push(nums[index]);
            dfs(index, remaining - nums[index], combination);
            combination.pop();

            dfs(index + 1, remaining, combination);
        }

        dfs(0, target, []);

        return result;
    }
}
