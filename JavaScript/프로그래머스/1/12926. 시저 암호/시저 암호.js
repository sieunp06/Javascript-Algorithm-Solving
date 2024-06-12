function solution(s, n) {
    const A = 'A'.charCodeAt();
    const Z = 'Z'.charCodeAt();
    const a = 'a'.charCodeAt();
    const z = 'z'.charCodeAt();
    
    var answer = '';
    
    for (const alphabet of s) {
        if (alphabet === ' ') {
            answer += ' ';
            continue;
        }
        var encode = alphabet.charCodeAt() + n;
        if (isUpper(alphabet) && encode > Z) {
            encode = encode - Z + A - 1;
        } 
        if (!isUpper(alphabet) && encode > z) {
            encode = encode - z + a - 1;
        }
        answer += String.fromCharCode(encode);
    }
    
    return answer;
}

function isUpper(alphabet) {
    if (alphabet.charCodeAt() >= 'a'.charCodeAt()) {
        return false;
    }
    return true;
}