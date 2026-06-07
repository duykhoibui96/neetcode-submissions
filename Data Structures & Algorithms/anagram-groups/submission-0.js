class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const group = new Map();

        for (let i = 0; i < strs.length; i ++) {
            const arr = Array(26).fill(0);
            const ch = strs[i];

            for (let j = 0; j < ch.length; j++) {
                arr[ch.charCodeAt(j) - 97]++;
            }

            const key = arr.join('#');
            if (!group.has(key)) {
                group.set(key, []);
            }

            group.get(key).push(ch);
        }

        return [...group.values()]
    }
}
