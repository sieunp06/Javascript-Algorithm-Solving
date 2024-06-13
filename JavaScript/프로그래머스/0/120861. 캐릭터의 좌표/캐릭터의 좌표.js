function solution(keyinput, board) {
    var answer = [0, 0];
    const x = Math.floor(board[0] / 2);
    const y = Math.floor(board[1] / 2);
    const xBorder = [-1 * x, x];
    const yBorder = [-1 * y, y];
    
    keyinput.forEach(input => {
        if (input === 'left') {
            if (answer[0] > xBorder[0]) {
                answer[0]--;   
            }
        }
        if (input === 'right') {
            if (answer[0] < xBorder[1]) {
                answer[0]++;
            }
        }
        if (input === 'down') {
            if (answer[1] > yBorder[0]) {
                answer[1]--;   
            }
        }
        if (input === 'up') {
            if (answer[1] < yBorder[1]) {
                answer[1]++;
            }
        }
    })
    
    return answer;
}