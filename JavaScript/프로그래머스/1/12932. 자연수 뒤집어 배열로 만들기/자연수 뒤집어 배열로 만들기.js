const solution = (n) => {
    return makeNumList(String(n)).reverse();
}

const makeNumList = (numText) => {
    validateType(numText, 'string');
    return numText.split('').map(alpha => parseInt(alpha));
}

const validateType = (target, type) => {
    if (typeof target !== type) {
        throw new TypeError('wrong type');
    }
}