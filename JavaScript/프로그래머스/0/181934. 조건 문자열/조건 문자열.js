function solution(ineq, eq, n, m) {
    if (n === m) {
        if (eq === '=') {
            return 1;
        } else {
            return 0;
        }
    } else {
        if (ineq === '>') {
            if (n > m) {
                return 1;
            } return 0;
        } else {
            if (n < m) {
                return 1;
            } return 0;
        }
    }
    
    return 1;
}