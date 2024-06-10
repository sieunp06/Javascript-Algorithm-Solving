function solution(n) {
    if (n === Math.pow(Math.floor(Math.sqrt(n)), 2)) {
        return Math.pow(Math.sqrt(n) + 1, 2);
    }
    return -1;
}