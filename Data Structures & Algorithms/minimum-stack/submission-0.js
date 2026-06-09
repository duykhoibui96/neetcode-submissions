class MinStack {
    stack = []

    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const currentMin = this.stack.length > 0 ? Math.min(val, this.stack[this.stack.length - 1][1]) : val;

        this.stack.push([val, currentMin]);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1][0];
    }   

    /**
     * @return {number}
     */
    getMin() {
        return this.stack[this.stack.length - 1][1];
    }
}
