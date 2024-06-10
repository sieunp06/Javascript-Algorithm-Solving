function solution(my_string) {
    var answer = 0
    const text = my_string.split(/[a-z|A-Z]/g);
    
    for (const num of text) {
        if (num !== '') {
            answer += parseInt(num);
        }
    }
    
    return answer;
}