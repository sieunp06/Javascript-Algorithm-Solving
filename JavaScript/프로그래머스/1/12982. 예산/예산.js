function solution(d, budget) {
    var answer = 0;
    
    var total = 0;
    for (const request of d.sort((a, b) => a - b)) {
        total += request;
        if (total > budget) {
            break;
        }
        answer++;
    }
    
    return answer;
}