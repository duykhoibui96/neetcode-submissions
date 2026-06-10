class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a - b);

        const result = [];
        const path = [];

        function backtrack(start, remaining) {
            if (remaining === 0) {
                result.push([...path]);
                return;
            }

            if (remaining < 0) {
                return;
            }

            for (let i = start; i < candidates.length; i++) {
                // Skip duplicates at the same tree level
                if (i > start && candidates[i] === candidates[i - 1]) {
                    continue;
                }

                const num = candidates[i];

                // Since array is sorted, no need to continue
                if (num > remaining) {
                    break;
                }

                path.push(num);

                // i + 1 because each number can only be used once
                backtrack(i + 1, remaining - num);

                path.pop();
            }
        }

        backtrack(0, target);

        return result;
    }
}
