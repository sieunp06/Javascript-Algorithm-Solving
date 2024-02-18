function solution(n) {
    var answer = 0;
    var text = n.toString();
    
    for (let i = 0; i < text.length; i++) {
        answer += parseInt(text.charAt(i));
    }
    
    return answer;
}