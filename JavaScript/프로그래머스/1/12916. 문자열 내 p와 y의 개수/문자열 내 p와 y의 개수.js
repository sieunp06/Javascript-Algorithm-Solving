const solution = (s) => {
    const splitedText = s.toLowerCase().split('');
    if (countNumberOfAlphabet(splitedText, 'p') === countNumberOfAlphabet(splitedText, 'y')) {
        return true;
    }
    return false;
}

const countNumberOfAlphabet = (text, target) => {
    if (typeof text !== 'object' || typeof target !== 'string') {
        throw new TypeError('error');
    }
    return text.filter(alpha => alpha === target).length;
}