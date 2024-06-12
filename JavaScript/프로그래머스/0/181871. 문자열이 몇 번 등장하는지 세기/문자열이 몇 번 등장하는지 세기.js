function solution(myString, pat) {
    var answer = 0;
    var start = 0; var end = pat.length;
    
    for (let i = start; i < myString.length - pat.length + 1; i++) {
        if (myString.substring(start, end) === pat) {
            answer++;
        }
        start++; end++;
    }
    
    return answer;
}