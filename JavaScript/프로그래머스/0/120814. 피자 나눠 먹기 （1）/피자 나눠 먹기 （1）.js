function solution(n) {
    const pizza_piece = 7;
    if (n % pizza_piece == 0) {
        return n / pizza_piece;
    }
    return Math.floor(n / pizza_piece) + 1;
}