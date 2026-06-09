class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rows = matrix.length;
        const cols = matrix[0].length;

        let left = 0;
        let right = rows * cols - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const row = Math.floor(mid / cols);
            const col = mid % cols;

            if (matrix[row][col] === target) {
                return true;
            }
            else if (matrix[row][col] < target) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }

        return false;
    }
}
