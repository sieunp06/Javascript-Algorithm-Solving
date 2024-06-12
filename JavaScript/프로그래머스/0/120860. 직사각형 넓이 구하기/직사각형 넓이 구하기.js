function solution(dots) {
    var answer = 1;
    const x1 = dots[0][0];
    const y1 = dots[0][1];
    
    for (let i = 1; i < dots.length; i++) {
        if (x1 !== dots[i][0] && y1 !== dots[i][1]) {
            answer = Math.abs(x1 - dots[i][0]) * Math.abs(y1 - dots[i][1]);
            break;
        }
    }
    
    return answer;
}