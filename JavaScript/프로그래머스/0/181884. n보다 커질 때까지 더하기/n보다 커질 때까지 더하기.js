function solution(numbers, n) {
    var answer = 0;
    for (const number of numbers) {
        if (answer > n) {
            break;
        }
        answer += number;
    }
    return answer;
}