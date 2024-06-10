function solution(array) {
    var answer = 0;
    
    for (const num of array) {
        answer += String(num).replaceAll(/[^7]/g, '').length;
    }
    
    return answer;
}