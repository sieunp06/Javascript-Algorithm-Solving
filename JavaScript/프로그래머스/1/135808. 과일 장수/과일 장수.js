function solution(k, m, score) {
    var answer = 0;
    score.sort((a, b) => b - a);
    
    var box = 0;
    for (let i = 0; i < score.length; i++) {
        box += score[i];
        if ((i + 1) % m === 0) {
            answer += score[i] * m;
        }
    }
    
    return answer;
}