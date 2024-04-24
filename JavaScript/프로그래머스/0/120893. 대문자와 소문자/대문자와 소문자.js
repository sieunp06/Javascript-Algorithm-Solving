function solution(my_string) {
    var answer = '';
    
    for (let i = 0; i < my_string.length; i++) {
        if (my_string.charAt(i) === my_string.charAt(i).toUpperCase()) {
            answer += my_string.charAt(i).toLowerCase();
        } else {
            answer += my_string.charAt(i).toUpperCase();
        }
    }
    return answer;
}