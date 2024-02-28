function solution(my_string) {
    var answer = 0;
    const text = my_string.replaceAll(/[a-z]/gi, '');
    for (let i = 0; i < text.length; i++) {
        answer += Number.parseInt(text.charAt(i));
    }
    
    return answer;
}