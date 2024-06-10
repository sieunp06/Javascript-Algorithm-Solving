function solution(n) {
    var answer = [];
    
    for (const num of String(n).split("").reverse()) {
        answer.push(parseInt(num));
    }
    
    return answer;
}