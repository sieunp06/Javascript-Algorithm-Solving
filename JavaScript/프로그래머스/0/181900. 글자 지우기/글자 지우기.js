function solution(my_string, indices) {
    var answer = '';
    
    indices.sort((a, b) => a - b);
    var ind = 0;
    for (let i = 0; i < my_string.length; i++) {
        if (i === indices[ind]) {
            ind++;
        } else {
            answer += my_string[i];
        }
    }
    
    return answer;
}