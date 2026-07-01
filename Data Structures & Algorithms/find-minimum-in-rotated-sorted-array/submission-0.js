class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        if (nums.length === 1) {
            return nums[0];
        }
        else if (nums.length === 2) {
            return Math.min(nums[0], nums[1]);
        }

        const midIndex = Math.floor(nums.length / 2);

        let left = midIndex;
        let right = midIndex;

        while (left > 0 || right < nums.length - 1) {
            if (left > 0 && nums[left - 1] > nums[left]) {
                return nums[left];
            }
            else if (right < nums.length - 1 && nums[right + 1] < nums[right]) {
                return nums[right + 1];
            }

            left--;
            right++;
        }

        return nums[left];
    }
}
