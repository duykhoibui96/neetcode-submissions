class Solution {
    func maxSubArray(_ nums: [Int]) -> Int {
        var cur = nums[0]
        var maxSum = cur

        for i in 1..<nums.count {
            cur = max(nums[i], cur + nums[i])
            maxSum = max(maxSum, cur)
        }
        
        return maxSum
    }
}