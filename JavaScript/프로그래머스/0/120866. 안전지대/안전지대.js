function solution(board) {
    return board.reduce((ans, arr, x) => {
        return ans + arr.reduce((i, a, y) => i + ![[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]].some(d => board[x][y] == 1 || !(!(x + d[0] >= 0 && y + d[1] >= 0 && x + d[0] < board.length && y + d[1] < board.length) ||  !board[x + d[0]][y + d[1]])), 0);
    },0) 
}