class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const result = [];

        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            const num = nums[i];

            let start = i + 1, end = nums.length - 1;

            while (start < end) {
                const sum = nums[start] + nums[end] + nums[i];
                if (sum === 0) {
                    result.push([num, nums[start], nums[end]]);
                    while (start < end && nums[start] === nums[start + 1]) start++;
                    while (start < end && nums[end] === nums[end - 1]) end--;
                    start++;
                    end--;
                }
                else if (sum < 0) {
                    start++;
                }
                else {
                    end--;
                }
            }
        }

        return result;
    }
}
