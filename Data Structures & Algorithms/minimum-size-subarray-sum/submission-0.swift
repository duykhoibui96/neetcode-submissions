class Solution {
    func minSubArrayLen(_ target: Int, _ nums: [Int]) -> Int {
        var minLength = -1
        var left = 0
        var sum = 0

        for right in 0..<nums.count {
            sum += nums[right]

            while sum >= target {
                let length = right - left + 1

                if minLength == -1 {
                    minLength = length
                }
                else {
                    minLength = min(minLength, length)
                }

                sum -= nums[left]
                left+=1
            }
        }


        return minLength == -1 ? 0 : minLength
    }
}
