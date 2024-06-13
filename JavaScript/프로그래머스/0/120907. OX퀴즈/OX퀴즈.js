function solution(quiz) {
    var answer = [];
    
    for (const q of quiz) {
        const cal = q.split(' ');
        
        const num1 = parseInt(cal[0]);
        const num2 = parseInt(cal[2]);
        const operator = cal[1];
        const result = parseInt(cal[4]);
        var real = -1;
        
        if (operator === '+') {
            real = num1 + num2;
        } else {
            real = num1 - num2;
        }
        
        if (real === result) {
            answer.push('O');
        } else {
            answer.push('X');
        }
    }
    return answer;
}