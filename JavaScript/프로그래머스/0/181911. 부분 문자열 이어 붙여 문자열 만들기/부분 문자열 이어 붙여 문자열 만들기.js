function solution(my_strings, parts) {
    var answer = '';
    for (let i = 0; i < my_strings.length; i++) {
        const start = parts[i][0];
        const end = parts[i][1];
        
        answer += my_strings[i].substring(start, end + 1);
    }
    return answer;
}