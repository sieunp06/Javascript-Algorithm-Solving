function solution(n) {
    var answer = 0;
    
    var idx = 1;
    var num = 1;
    while (true) {
        if (num % 3 === 0) {
            num++;
            continue;
        }
        if (String(num).includes('3')) {
            num++;
            continue;
        }
        
        if (idx === n) {
            break;
        }
        
        idx++;
        num++;
    }
    return num;
}