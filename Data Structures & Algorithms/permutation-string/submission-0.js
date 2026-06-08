class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }

        const countS1 = Array(26).fill(0);
        const countS2 = Array(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            countS1[s1.charCodeAt(i) - 97]++;
            countS2[s2.charCodeAt(i) - 97]++;
        }

        let match = 0;
        for (let i = 0; i < 26; i++) {
            if (countS1[i] === countS2[i]) match++;
        }

        let left = 0;

        for(let i = s1.length; i < s2.length; i++) {
            if (match === 26) return true;

            let idx = s2.charCodeAt(i) - 97;
            countS2[idx]++;

            if (countS1[idx] === countS2[idx]) {
                match++;
            }
            else if (countS1[idx] + 1 === countS2[idx]) {
                match--;
            }

            idx = s2.charCodeAt(left) - 97;
            countS2[idx]--;

            if (countS1[idx] === countS2[idx]) {
                match++;
            }
            else if (countS1[idx] - 1 === countS2[idx]) {
                match--;
            }

            left++;
        }

        return match === 26;
    }
}
