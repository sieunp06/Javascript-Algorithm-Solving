function solution(myString, pat) {
    var answer = '';
    for (let i = 0; i < myString.length; i++) {
        if (myString.charAt(i) === 'A') {
            answer += 'B';
        } else {
            answer += 'A';
        }
    }
    if (answer.includes(pat)) {
        return 1;
    }
    return 0;
}