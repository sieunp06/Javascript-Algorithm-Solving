function solution(number, limit, power) {
    var answer = 0;
    
    for (let i = 1; i <= number; i++) {
        var count = 0;
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (j * j == i) {
                count++;
                continue;
            } 
            if (i % j === 0) {
                count += 2;
            }
        }
        
        if (count > limit) {
            answer += power
        } else {
            answer += count;
        }
    }
    
    return answer;
}