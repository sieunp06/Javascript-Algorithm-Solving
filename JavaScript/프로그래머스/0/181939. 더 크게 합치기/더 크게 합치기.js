function solution(a, b) {
    const first = parseInt(String(a) + String(b));
    const second = parseInt(String(b) + String(a));
    
    if (first >= second) {
        return first;
    }
    return second;
}