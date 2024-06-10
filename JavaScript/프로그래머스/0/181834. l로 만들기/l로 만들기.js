function solution(myString) {
    var answer = '';
    
    for (const alphabet of myString) {
        if (alphabet.charCodeAt() < 'l'.charCodeAt()) {
            answer += 'l';
            continue;
        } 
        answer += alphabet;
    }
    
    return answer;
}