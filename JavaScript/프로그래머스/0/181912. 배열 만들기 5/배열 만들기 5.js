function solution(intStrs, k, s, l) {
    var answer = [];
    
    for (const str of intStrs) {
        const sub = parseInt(str.substring(s, s + l));
        if (sub > k) {
            answer.push(sub);
        }
    }
    
    return answer;
}