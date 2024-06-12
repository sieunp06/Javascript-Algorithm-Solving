function solution(a, b, n) {
    var answer = 0;
    
    while (n >= a) {
        const get = Math.floor(n / a) * b;
        n = get + n % a;
        answer += get;
    }
    return answer;
}