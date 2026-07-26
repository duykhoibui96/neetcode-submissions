class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const resultLength = n * 2;
        let open = 0;
        let close = 0;
        const result = [];

        function backtracking(current = "") {
            if (current.length === resultLength) {
                result.push(current);
                return;
            }

            if (current === "") {
                open++;
                backtracking(current + "(");
                open--;
                return;
            }

            if (current[current.length - 1] === ")") {
                if (open >= resultLength / 2) {
                    close++;
                    backtracking(current + ")");
                    close--;
                    return;
                }

                open++;
                backtracking(current + "(");
                open--;

                if (open > close) {
                    close++;
                    backtracking(current + ")");
                    close--;
                }
            }
            else if (open >= resultLength / 2) {
                close++;
                backtracking(current + ")");
                close--;
            }
            else {
                open++;
                backtracking(current + "(");
                open--;

                if (open > close) {
                    close++;
                    backtracking(current + ")");
                    close--;
                }
            }
        }

        backtracking();

        return result;
    }
}
