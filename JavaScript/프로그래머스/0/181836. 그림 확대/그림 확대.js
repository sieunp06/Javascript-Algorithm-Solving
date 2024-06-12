function solution(picture, k) {
    var answer = [];
    
    for (const pic of picture) {
        var text = '';
        for (const p of pic.split('')) {
            text += p.repeat(k);
        }
        for (let i = 0; i < k; i++) {
            answer.push(text);   
        }
    }
    return answer;
}