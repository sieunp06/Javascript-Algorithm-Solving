function solution(n, control) {
    var answer = n;
    for (const letter of control) {
        if (letter === 'w') {
            answer += 1;
            continue;
        }
        if (letter === 's') {
            answer -= 1;
            continue;
        }
        if (letter === 'd') {
            answer += 10;
            continue;
        }
        if (letter === 'a') {
            answer -= 10;
            continue;
        }
    }
    return answer;
}