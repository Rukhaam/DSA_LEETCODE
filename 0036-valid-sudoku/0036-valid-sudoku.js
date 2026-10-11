/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
    for (let i = 0; i < 9; i++) {
        const row = board[i].filter(val => val !== ".");
        if (new Set(row).size !== row.length) {
            return false;
        }
    }
    for (let j = 0; j < 9; j++) {
        const col = [];

        for (let i = 0; i < 9; i++) {
            if (board[i][j] !== ".") {
                col.push(board[i][j]);
            }
        }

        if (new Set(col).size !== col.length) {
            return false;
        }
    }
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            const box = [];

            const rows = board.slice(i, i + 3);

            for (let row of rows) {
                box.push(...row.slice(j, j + 3));
            }

            const digits = box.filter(val => val !== ".");

            if (new Set(digits).size !== digits.length) {
                return false;
            }
        }
    }

    return true;
}