function solution(price, money, count) {
    var total = 0;
    for (let i = 1; i <= count; i++) {
        total += price * i;
    }
    
    const answer = total - money;
    if (answer < 0) {
        return 0;
    }
    return answer;
}