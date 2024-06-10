function solution(n) {
    var answer = 0;

    for (const num of String(n)) {
        answer += parseInt(num);
    }

    return answer;
}