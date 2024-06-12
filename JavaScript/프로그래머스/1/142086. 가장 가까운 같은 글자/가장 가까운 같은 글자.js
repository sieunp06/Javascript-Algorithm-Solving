function solution(s) {
    var answer = [];
    
    for (let i = s.length - 1; i >= 0; i--) {
        const idx = s.lastIndexOf(s[i], i - 1);
        if (i === 0 || idx === -1) {
            answer.push(-1);
            continue;
        }
        answer.push(i - idx);
    }
    
    return answer.reverse();
}