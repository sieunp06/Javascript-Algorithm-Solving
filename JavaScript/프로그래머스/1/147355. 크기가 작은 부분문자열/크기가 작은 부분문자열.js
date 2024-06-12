function solution(t, p) {
    var answer = [];
    for (let i = 0; i < t.length - p.length + 1; i++) {
        answer.push(parseInt(t.substring(i, i + p.length)));
    }
    return answer.filter(num => num <= parseInt(p)).length;
}