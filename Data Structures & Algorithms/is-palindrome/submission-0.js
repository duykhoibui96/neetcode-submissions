class Solution {
    isAlphanumeric(char) {
        const code = char.charCodeAt(0);

        return (
            (code >= 48 && code <= 57) || // 0-9
            (code >= 65 && code <= 90) || // A-Z
            (code >= 97 && code <= 122)   // a-z
        );
    }

    compare(ch1, ch2) {
        return ch1.toLowerCase() === ch2.toLowerCase();
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const filteredS = s.split('').filter(this.isAlphanumeric).join('');

        let start = 0, end = filteredS.length - 1;

        while (start <= end) {
            if (!this.compare(filteredS[start], filteredS[end])) {
                return false;
            }

            start++;
            end--;
        }

        return true;
    }
}
