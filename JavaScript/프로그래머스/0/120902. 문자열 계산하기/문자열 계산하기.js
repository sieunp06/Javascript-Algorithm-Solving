function solution(my_string) {
    const str = my_string.split(" ");
    var answer = parseInt(str[0]);
    
    var plus = true;
    for (let i = 1; i < str.length; i++) {
        const cur = str[i];
        
        if (cur === '+') {
            plus = true;
            continue;
        } 
        if (cur === '-') {
            plus = false;
            continue;
        }
        
        if (plus) {
            answer += parseInt(cur);
        } else {
            answer -= parseInt(cur);
        }
    }
    return answer;
}