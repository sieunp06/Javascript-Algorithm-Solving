function solution(numLog) {
    var answer = '';
    
    var pre = numLog[0];
    for (let i = 1; i < numLog.length; i++) {
        const div = numLog[i] - pre;
        
        if (div === 1) {
            answer += 'w';
        } else if (div === -1) {
            answer += 's';
        } else if (div === 10) {
            answer += 'd';
        } else if (div === -10) {
            answer += 'a';
        }
        
        pre = numLog[i];
    }
    
    return answer;
}