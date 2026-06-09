class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        tokens.forEach((element) => {
            if (['+', '-', '*', '/'].includes(element)) {
                const firstLastElement = stack.pop();
                const secondLastElement = stack.pop();

                let result;
                switch (element) {
                    case '+':
                        result = secondLastElement + firstLastElement;
                        break;
                    case '-':
                        result = secondLastElement - firstLastElement;
                        break;
                    case '*':
                        result = secondLastElement * firstLastElement;
                        break;
                    case '/':
                        result = Math.trunc(secondLastElement / firstLastElement);
                        break;
                }

                stack.push(result);
            }
            else if (Number(element) !== NaN) {
                stack.push(Number(element))
            }
        })

        return stack.pop();
    }
}
