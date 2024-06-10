function solution(s) {
    var answer = '';
    
    for (const alphabet of s) {
        if (s.indexOf(alphabet) === s.lastIndexOf(alphabet)) {
            answer += alphabet;
        }
    }
    
    return answer.split("").sort().join("");
}