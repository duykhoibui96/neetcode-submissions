class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const sStringMap = new Map();

        for (let str of s) {
            if (!sStringMap.has(str)) {
                sStringMap.set(str, 1);
            }
            else {
                sStringMap.set(str, sStringMap.get(str) + 1);
            }
        }

        const tStringMap = new Map();

        for (let str of t) {
            if (!tStringMap.has(str)) {
                tStringMap.set(str, 1);
            }
            else {
                tStringMap.set(str, tStringMap.get(str) + 1);
            }
        }

        for (let [str, count] of sStringMap.entries()) {
            if (!tStringMap.has(str) || tStringMap.get(str) !== count) {
                return false;
            }
        }

        return true;
    }
}
