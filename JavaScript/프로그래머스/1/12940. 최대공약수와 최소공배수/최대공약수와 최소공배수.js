function solution(n, m) {
    var answer = [1, Math.max(n, m)];
    
    for (let i = 1; i <= Math.min(n, m); i++) {
        if (n % i === 0 && m % i === 0 && answer[0] < i) {
            answer[0] = i;
        }
    }
    
    var num = answer[1];
    while (true) {
        if (num % n === 0 && num % m === 0) {
            answer[1] = num;
            break;
        }
        num++;
    }
    
    return answer;
}