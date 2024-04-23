function solution(angle) {
    const range = 90;
    if (angle < range) {
        return 1;
    }
    if (angle == range) {
        return 2;
    }
    if (angle == range * 2) {
        return 4;
    }
    return 3;
}