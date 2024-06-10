function solution(age) {
    var answer = '';
    
    for (const alpha of String(age)) {
        answer += String.fromCharCode(parseInt(alpha) + 'a'.charCodeAt());
    }
    
    return answer;
}