class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if (nums.length === 1) {
            return nums[0] === target ? 0 : -1;
        }
        else if (nums.length === 2) {
            return nums[0] === target ? 0 : nums[1] === target ? 1 : -1;
        }

        const midIndex = Math.floor(nums.length / 2);
        let left = midIndex;
        let right = midIndex;

        let minIndex = 0;
        while (left > 0 || right < nums.length - 1) {
            if (nums[left] === target) {
                return left;
            }
            else if (nums[right] === target) {
                return right;
            }
            
            if (left > 0 && nums[left - 1] > nums[left]) {
                minIndex = left;
                break;
            }
            else if (right < nums.length - 1 && nums[right + 1] < nums[right]) {
                minIndex = right + 1;
                break;
            }

            if (left > 0) left--;
            if (right < nums.length - 1) right++;
        }

        let start, end;

        const maxIndex = minIndex === 0 ? nums.length - 1 : minIndex - 1;

        if (target === nums[maxIndex]) {
            return maxIndex;
        }
        else if (target === nums[minIndex]) {
            return minIndex;
        }
        else if (target < nums[minIndex] || target > nums[maxIndex]) {
            return -1;
        }

        if (target <= nums[nums.length - 1]) {
            start = minIndex;
            end = nums.length - 1;
        }
        else {
            start = 0;
            end = maxIndex;
        }

        while (start <= end) {
            const mid = Math.floor((start + end) / 2);

            if (nums[mid] === target) {
                return mid;
            }
            else if (nums[mid] > target) {
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }

        return -1;
    }
}
