function solution(s) {
    var answer = 0;
    
    const numbers = s.split(' ');
    var pre = parseInt(numbers[0]);
    answer += pre;
    
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] === 'Z') {
            answer -= pre;
            continue;
        }
        const curNum = parseInt(numbers[i]);
        answer += curNum;
        pre = curNum;
    }
    
    return answer;
}