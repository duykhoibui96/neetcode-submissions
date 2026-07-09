class Solution {
    isAlphanumericCharacter(ch) {
        return (ch >= '0' && ch <= '9') || (ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z');
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const alphaNumericOnly = s.split('').filter(this.isAlphanumericCharacter).join('');

        let i = 0;
        let j = alphaNumericOnly.length - 1;

        while (i < j) {
            const leftCh = alphaNumericOnly[i++];
            console.log("leftCh", leftCh);
            const rightCh = alphaNumericOnly[j--];
            console.log("rightCh", rightCh);

            if (leftCh.toLowerCase() !== rightCh.toLowerCase()) {
                return false;
            }
        }

        return true;
    }
}
