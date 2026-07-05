class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numberSet = new Set();

        for (let num of nums) {
            if (numberSet.has(num)) {
                return true;
            }

            numberSet.add(num);
        }

        return false;
    }
}
