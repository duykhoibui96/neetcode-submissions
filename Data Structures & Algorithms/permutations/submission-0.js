class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const current = [];
        const result = [];
        const status = new Array(nums.length).fill(false);

        function backtrack() {
            if (current.length === nums.length) {
                result.push([...current]);
                return;
            }

            nums.forEach((num, index) => {
                if (status[index]) {
                    return;
                }

                status[index] = true;
                current.push(num);

                backtrack();

                current.pop();
                status[index] = false;
            })
        }


        backtrack();

        return result;
    }
}
