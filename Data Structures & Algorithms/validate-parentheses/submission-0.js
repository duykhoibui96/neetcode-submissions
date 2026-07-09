class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
;
        const closedBracketMapping = {
            ')': '(',
            '}': '{',
            ']': '[' 
        }

        for (let ch of s) {
            if (closedBracketMapping[ch]) {
                if (!stack.length) {
                    return false;
                }

                if (stack[stack.length - 1] !== closedBracketMapping[ch]) {
                    return false;
                }

                stack.pop();
            }
            else {
                stack.push(ch);
            }
        }

        return !stack.length;
    }
}
