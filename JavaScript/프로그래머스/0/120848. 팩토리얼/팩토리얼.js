function solution(n) {
    var answer = 0;
    var num = 1;
    while (num <= n) {
        answer++;
        num *= answer;
    }
    return answer - 1;
}