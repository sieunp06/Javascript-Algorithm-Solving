function solution(a, b) {
    const aIsEven = isEven(a);
    const bIsEven = isEven(b);
    
    if (aIsEven && bIsEven) {
        return Math.abs(a - b);
    }
    if (!aIsEven && !bIsEven) {
        return Math.pow(a, 2) + Math.pow(b, 2);
    }
    return 2 * (a + b);
}

function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    return false;
}