function solution(s) {
    var answer = 0;
    
    var x = s[0];
    
    var numOfX = 1;
    var numOfY = 0;
    
    for (let i = 1; i < s.length; i++) {
        if (numOfX === numOfY) {
            x = s[i];
            numOfX = 1;
            numOfY = 0;
            answer++;
        } else {
            if (x === s[i]) {
                numOfX++;
                continue;
            } 
            numOfY++;   
        }
    }
    return answer + 1;
}