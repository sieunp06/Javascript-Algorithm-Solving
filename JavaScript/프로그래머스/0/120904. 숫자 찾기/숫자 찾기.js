function solution(num, k) {
    const result = String(num).indexOf(String(k));
    
    if (result === -1) {
        return result;
    }
    return result + 1;
}