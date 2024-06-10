function solution(order) {
    var answer = 0;
    
    for (const num of String(order)) {
        if (num === '3' || num === '6' || num === '9') {
            answer++;
        }
    }
    
    return answer;
}