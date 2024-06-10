function solution(myStr) {
    var answer = [];
    
    var text = '';
    for (const alphabet of myStr) {
        if (alphabet !== 'a' && alphabet !== 'b' && alphabet !== 'c') {
            text += alphabet;
        } else {
            if (text !== '') {
                answer.push(text);
                text = '';
            }
        }
    }
    if (text !== '') {
        answer.push(text);
    }
    if (answer.length === 0) {
        answer.push("EMPTY");
    }
    
    return answer;
}