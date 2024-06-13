function solution(sides) {
    var answer = 0;
    const sum = sides[0] + sides[1];
    const max = Math.max(sides[0], sides[1]);
    const min = Math.min(sides[0], sides[1]);
    
    for (let i = max - min + 1; i <= max; i++) {
        answer++;
    }
    
    for (let i = max + 1; i < sum; i++) {
        answer++;
    }
    
    return answer;
}