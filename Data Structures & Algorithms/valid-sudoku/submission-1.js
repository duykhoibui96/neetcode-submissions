class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const columnSetArray = Array.from({ length: 9 }).map(() => new Set());
        const rowSetArray = Array.from({ length: 9 }).map(() => new Set());
        const squareSetArray = Array.from({ length: 9 }).map(() => new Set());

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const value = board[row][col];

                if (value === '.') {
                    continue;
                }

                if (rowSetArray[row].has(value)) {
                    return false;
                }

                if (columnSetArray[col].has(value)) {
                    return false;
                }

                let squareIndex = Math.floor((row / 3)) * 3 + Math.floor(col / 3);

                if (squareSetArray[squareIndex].has(value)) {
                    return false;
                }

                rowSetArray[row].add(value);
                columnSetArray[col].add(value);
                squareSetArray[squareIndex].add(value);
            }
        }

        return true;
    }
}
