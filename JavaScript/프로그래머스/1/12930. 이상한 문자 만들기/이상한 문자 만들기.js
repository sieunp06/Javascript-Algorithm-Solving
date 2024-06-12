function solution(s) {
    var answer = [];
    var texts = s.split(' ');
    
    for (const text of texts) {
        var letter = '';
        for (let i = 0; i < text.length; i++) {
            if (i % 2 === 0) {
                letter += text[i].toUpperCase();
            } else {
                letter += text[i].toLowerCase();
            }
        }
        answer.push(letter);
    }
    return answer.join(" ");
}