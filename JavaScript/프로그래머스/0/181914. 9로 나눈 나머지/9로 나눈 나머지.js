function solution(number) {
    var answer = 0;
    
    for (const num of number) {
        answer += parseInt(num) % 9;
    }
    
    return answer % 9;
}