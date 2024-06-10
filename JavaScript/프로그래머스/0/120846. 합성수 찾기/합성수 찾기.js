function solution(n) {
    var answer = 0;
    
    for (let i = 4; i <= n; i++) {
        var flag = true;
        for (j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = false;
                break;
            }
        }
        if (!flag) {
            answer++;
        }
    }
    
    return answer;
}