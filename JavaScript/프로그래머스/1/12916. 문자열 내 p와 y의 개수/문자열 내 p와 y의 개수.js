function solution(s){
    var numOfP = 0;
    var numOfY = 0;
    
    for (const text of s.toLowerCase()) {
        if (text === 'p') {
            numOfP++;
        }
        if (text === 'y') {
            numOfY++;
        }
    }
    
    if (numOfP === numOfY) {
        return true;
    }
    return false;
}