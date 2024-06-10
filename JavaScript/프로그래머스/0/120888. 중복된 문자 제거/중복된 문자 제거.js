function solution(my_string) {
    var answer = '';
    
    for (const alphabet of my_string) {
        if (!answer.includes(alphabet)) {
            answer += alphabet;
        }
    }
    return answer;
}