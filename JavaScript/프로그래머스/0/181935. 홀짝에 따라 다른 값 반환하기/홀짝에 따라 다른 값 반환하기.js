function solution(n) {
    var answer = 0;
    if (n % 2 != 0) {
        for (let i = 1; i <= n; i += 2) {
            answer += i;
        }
        return answer;
    }
    for (let i = 2; i <= n; i += 2) {
        answer += Math.floor(Math.pow(i, 2));
    }
    return answer;
}