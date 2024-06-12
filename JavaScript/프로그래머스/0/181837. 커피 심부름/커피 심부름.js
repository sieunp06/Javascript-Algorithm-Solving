function solution(order) {
    var answer = 0;
    const AMERICANO = 4500;
    const LATTE = 5000;
    
    for (const each of order) {
        if (each === 'anything' || each.includes('americano')) {
            answer += AMERICANO;
            continue;
        }
        answer += LATTE;
    }
    
    return answer;
}