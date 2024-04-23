function solution(money) {
    const ice_americano = 5500;
    const cup = Math.floor(money / ice_americano);
    const round = Math.floor(money % ice_americano);
    return [cup, round];
}