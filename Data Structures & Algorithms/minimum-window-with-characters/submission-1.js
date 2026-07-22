class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const frequencies = new Map();

        for (let i = 0; i < t.length; i++) {
            frequencies.set(t[i], (frequencies.get(t[i]) || 0) + 1);
        }

        let left = 0;
        let missing = t.length;

        let bestLength = Infinity;
        let bestLeft = 0;
        let bestRight = 0;

        for (let right = 0; right < s.length; right++) {
            const ch = s[right];

            if (frequencies.has(ch)) {
                if (frequencies.get(ch) > 0) missing--; 
                frequencies.set(ch, frequencies.get(ch) - 1);
            }

            while (missing === 0) {
                const length = right - left + 1;

                if (length < bestLength) {
                    bestLength = length;
                    bestLeft = left;
                    bestRight = right;
                }

                const ch = s[left];
                if (frequencies.has(ch)) {
                    frequencies.set(ch, frequencies.get(ch) + 1);
                    if (frequencies.get(ch) > 0) {
                        missing++;
                    }
                }
                left++;
            }
        }

        return bestLength === Infinity ? "" : s.slice(bestLeft, bestRight + 1);
    }
}
