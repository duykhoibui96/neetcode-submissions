class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map((str) => str.length + '#' + str).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const arr = [];

        let i = 0;

        while (i < str.length) {
            let j = i;

            while (str[j] !== '#') {
                j++;
            }

            const length = Number(str.slice(i, j));
            const text = str.slice(j + 1, j + 1 + length);

            arr.push(text);
            i = j + 1 + length;
        }

        return arr;
    }
}
