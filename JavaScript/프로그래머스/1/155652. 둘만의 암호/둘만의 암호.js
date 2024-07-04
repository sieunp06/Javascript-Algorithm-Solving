const solution = (s, skip, index) => {
    var answer = '';
    const allAlphabet = makeAlphabets(skip);

    for (const alphabet of s) {
        let idx = allAlphabet.indexOf(alphabet) + index;
        if (idx > allAlphabet.length - 1) {
            idx %= allAlphabet.length;
        }
        answer += allAlphabet[idx];
    }
    
    return answer;
}

const makeAlphabets = (skip) => {
    const alphabets = [];
    for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
        const target = String.fromCharCode(i);
        if (!isSkipedAlphabet(target, skip)) {
            alphabets.push(target);
        }
    }
    return alphabets;
}

const isSkipedAlphabet = (target, skip) => {
    return skip.includes(target) ? true : false;
}