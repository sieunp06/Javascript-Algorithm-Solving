function solution(n) {
    var answer = [n];
    
    var target = n;
    while (target > 1) {
        if (target % 2 == 0) {
            target /= 2;
        } else {
            target = 3 * target + 1;
        }
        answer.push(target);
    }
    
    return answer;
}