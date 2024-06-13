function solution(A, B) {
    var answer = 0
    
    while (A !== B) {
        if (answer === A.length) {
            return -1;
        }
        const splited = A.split('');
        splited.unshift(splited.pop());
        A = splited.join('');
        answer++;
    }
    
    return answer;
}