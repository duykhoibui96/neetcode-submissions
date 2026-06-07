class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const hashSet = new Set(nums);

        let maxLength = 0;
        for (const num of hashSet) {
            if (!hashSet.has(num - 1)) {
                let length = 1;

                while (hashSet.has(num + length)) {
                    length++;
                }

                maxLength = Math.max(maxLength, length);
            }
        }

        return maxLength;
    }
}
