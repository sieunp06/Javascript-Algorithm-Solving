function solution(n, m, section) {
    var answer = 1;
    var arrive = section[0] + m - 1;
    for (let i = 1; i < section.length; i++) {
        if (arrive < section[i]) {
            arrive = section[i] + m - 1;
            answer++;
        }
    }
    
    return answer;
}