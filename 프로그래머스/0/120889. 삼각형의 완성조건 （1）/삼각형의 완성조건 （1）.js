function solution(sides) {
    const side = sides.sort();
    if (side[side.length - 1] < side[0] + side[1]) {
        return 1;
    }
    return 2;
}