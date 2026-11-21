class Solution {
    func numOfSubarrays(_ arr: [Int], _ k: Int, _ threshold: Int) -> Int {
        var left = 0
        var sum = 0
        var count = 0

        for i in 0..<arr.count {
            let num = arr[i]

            sum += num;

            if i - left + 1 == k {
                if (sum / k) >= threshold {
                    count+=1
                }

                sum -= arr[left]
                left+=1
            }
        }

        return count
    }
}
