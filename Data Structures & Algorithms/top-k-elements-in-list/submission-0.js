class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const mapper = new Map();

        for (const num of nums) {
            if (!mapper.has(num)) {
                mapper.set(num, 0);
            }

            mapper.set(num, mapper.get(num) + 1);
        }

        const arr = [];
        for (const [num, count] of mapper) {
            arr.push([num, count]);
        }

        arr.sort((a, b) => b[1] - a[1]);

        return arr.splice(0, k).map(([num,]) => num);
    }
}
