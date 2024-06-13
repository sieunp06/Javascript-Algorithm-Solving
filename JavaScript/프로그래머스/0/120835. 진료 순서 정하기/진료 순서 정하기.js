function solution(emergency) {
    const sliced = emergency.slice().sort((a, b) => b - a);
    return emergency.map(score => sliced.indexOf(score) + 1);
}