class Solution {
    func containsNearbyDuplicate(_ nums: [Int], _ k: Int) -> Bool {
        var seen = Set<Int>()
        var left = 0

        for i in 0..<nums.count {
            if seen.contains(nums[i]) {
                return true
            }

            seen.insert(nums[i])

            if (seen.count > k) {
                seen.remove(nums[left])
                left+=1
            }
        }

        return false
    }
}
