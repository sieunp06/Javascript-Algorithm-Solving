function solution(n) {
    var answer = 0;
    
    var num = 1;
    while (true) {
        if (num % n === 0 && num % 6 === 0) {
            answer = num;
            break;
        }
        num++;
    }
    
    return answer / 6;
}