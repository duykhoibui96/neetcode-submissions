class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const lastSeen = new Map();
        let left = 0;
        let max = 0;

        for (let right = 0; right < s.length; right++) {
            const ch = s[right];

            if (lastSeen.has(ch)) {
                left = Math.max(left, lastSeen.get(ch) + 1);
            }

            lastSeen.set(ch, right);
            max = Math.max(max, right - left + 1);
        }

        return max;
    }
}
