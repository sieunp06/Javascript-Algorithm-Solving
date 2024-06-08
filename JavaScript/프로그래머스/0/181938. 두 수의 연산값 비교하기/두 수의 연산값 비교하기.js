function solution(a, b) {
    var answer = 0;
    const first = parseInt(String(a) + String(b));
    const second = 2 * a * b;
    
    if (first >= second) {
        return first;
    }
    return second;
}