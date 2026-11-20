class Solution {
    func findMaxSubArray(_ nums: [Int]) -> Int {
        var cur = nums[0]
        var best = nums[0]

        for numIndex in 1..<nums.count {
            let num = nums[numIndex]
            cur = max(num, cur + num)
            best = max(best, cur)
        }

        return best
    }

    func findMinSubArray(_ nums: [Int]) -> Int {
        var cur = nums[0]
        var best = nums[0]

        for numIndex in 1..<nums.count {
            let num = nums[numIndex]
            cur = min(num, cur + num)
            best = min(best, cur)
        }

        return best
    }

    func maxSubarraySumCircular(_ nums: [Int]) -> Int {
        var total = 0

        for num in nums {
            total += num
        }

        let maxSubArray = findMaxSubArray(nums)
        let minSubArray = findMinSubArray(nums)

        return maxSubArray < 0 ? maxSubArray : max(maxSubArray, total - minSubArray)
    }
}